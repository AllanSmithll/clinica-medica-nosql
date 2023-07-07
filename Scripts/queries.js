/* 1- Mostre quem são os pacientes adultos mais graves da clínica (com estado
  de urgência 4 ou 5) - Uso de filtros e sem projeção */
db.pacientes.find({
  estado_urgencia: {
    $in: [4, 5]
  },
  $expr: {
    $gte: [{
        $divide: [{
            $subtract: [new Date(), "$data_nascimento"]
          },
          1000 * 60 * 60 * 24 * 365
        ]
      },
      17
    ]
  }
});

/* 2- Mostre a média salarial dos médicos da clínica - Uso de filtro e sem projeção */
db.funcionarios.aggregate([{
    $match: {
      especialidade: {
        $exists: true
      }
    }
  },
  {
    $group: {
      _id: null,
      mediaSalario: {
        $avg: "$salario"
      }
    }
  }
]);

/* 3- Consulte quais foram os funcionários contratados desde março de 2020, começo da pandemia do coronavirus - Uso de filtros e projeção */
  db.funcionarios.find({
    especialidade: {
      $ne: null
    },
    data_admissao: {
      $gte: ISODate("2020-03-01")
    }
  }, {
    nome: 1,
    especialidade: 1,
    preco: 0,
    _id: 0
  });
  
/* 4- Consulte no sistema se existe algum paciente que ainda não tem receita registrada - Uso de filtro e projeção */
  db.pacientes.find({
    "receitas": {
      $exists: false
    }
  }, {
    "nome": 1,
    "endereco": 1
  });

/* 5- Descobrir quais pacientes têm apenas um número de telefone cadastrado, para que a clínica entre em contato para pedir ao paciente mais um número, caso o primeiro não funcione - Uso de acesso a elemento de array; */
db.pacientes.find({
  "telefones.0": {
    $exists: true,
    $ne: null
  },
  "telefones.1": {
    $exists: false
  }
}, {
  nome: 1,
  telefones: 1,
  _id: 0
})

/* 6- consulta com pelo menos acesso a estrutura/objeto embutido;
Quero saber quem são os oftalmologistas e os preços das consultas deles */
db.funcionarios.find({
  "especialidade.descricao": "Oftalmologia"
}, {
  nome: 1,
  crm: 1,
  "especialidade.preco": 1,
  _id: 0
})

/* 7- Quais pacientes mais graves que ainda não foram consultados - uso de sort e limit e filtros e projeções */
db.pacientes.find({
    estado_urgencia: {
      $in: [4, 5]
    },
    "receitas": {
      $exists: false
    }
  }, {
    nome: 1,
    estado_urgencia: 1
  })
  .sort({
    nome: 1
  })
  .limit(1);

/* 8- Esta pesquisa irá retorna todos os pacientes que possuem receitas com mais de dois medicamentos - Uso aggregate e match ou project ou ambos
*/
db.pacientes.aggregate([
  {
    $match: {
      $expr: {
        $gte: [
          { $size: "$receitas" },
          2
        ]
      }
    }
  }
])
db.pacientes.aggregate([
  {
    $match: {
      $expr: {
        $gte: [
          { $size: "$receitas" },
          2
        ]
      }
    }
  }
])

/* 9- Apresenta o nome e no máximo duas formas de contatos para os pacientes que moram em São Miguel de Taipu, agrupando-os pelo bairro - Uso de aggregate e group by
 */
db.pacientes.aggregate([{
    $match: {
      "endereco.cidade": "São Miguel de Taipu"
    }
  },
  {
    $group: {
      _id: "$endereco.bairro",
      pacientes: {
        $push: {
          nome: "$nome",
          bairro: "$endereco.bairro",
          telefones: {
            $slice: ["$telefones", 2]
          }
        }
      }
    }
  }
]);

/* 10- Esta consulta apresenta o nome, especialidade a quantidade de consultas realizadas  pelos médicos - Uso de aggregate e lookup */
db.funcionarios.aggregate([{
    $lookup: {
      from: "pacientes",
      localField: "_id",
      foreignField: "receitas.medico",
      as: "pacientes"
    }
  },
  {
    $project: {
      _id: 0,
      medico: "$nome",
      especialidade: {
        $cond: {
          if: {
            $ifNull: ["$especialidade", false]
          },
          then: "$especialidade.descricao",
          else: "Sem especialidade"
        }
      },
      quantidadeConsultas: {
        $cond: {
          if: {
            $isArray: "$pacientes"
          },
          then: {
            $size: "$pacientes"
          },
          else: 0
        }
      }
    }
  }
])

/* 11- Esta consulta apresenta o nome do paciente, a quantidade de consultas realizadas para cada especialidade na clínica e no final, o valor_arrecadado de todas as consultas. - Uso de cosnsulta  (robusta) a seu critério, dentro do contexto da aplicação. */
db.pacientes.aggregate([{
    $lookup: {
      from: "funcionarios",
      localField: "receitas.medico",
      foreignField: "_id",
      as: "especialidades"
    }
  },
  {
    $unwind: "$especialidades"
  },
  {
    $group: {
      _id: {
        pacienteId: "$_id",
        especialidade: "$especialidades.especialidade.descricao"
      },
      paciente: {
        $first: "$nome"
      },
      valorArrecado: {
        $sum: "$especialidades.especialidade.preco"
      },
      consultas: {
        $sum: 1
      }
    }
  },
  {
    $group: {
      _id: "$_id.pacienteId",
      paciente: {
        $first: "$paciente"
      },
      consultas: {
        $sum: "$consultas"
      },
      especialidades: {
        $push: {
          especialidade: "$_id.especialidade",
          quantidade: "$consultas"
        }
      },
      valorArrecado: {
        $first: "$valorArrecado"
      }
    }
  },
  {
    $project: {
      _id: 0,
      paciente: 1,
      consultas: 1,
      especialidades: 1,
      valorArrecado: {
        $round: ["$valorArrecado", 2]
      }
    }
  }
]);