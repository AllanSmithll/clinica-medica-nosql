// 2 consultas com pelo menos filtros diversos (IN, GT, etc), com projeção;
/* Mostre quem são os pacientes mais graves da clínica (com estado de urgência 4 ou 5) */
db.pacientes.find({
  estado_urgencia: {
    $in: [4, 5]
  }
}, {
  nome: 1,
  estado_urgencia: 1,
  endereco: 1
});

// consulta com pelo menos aggregate e match ou project ou ambos; 
//Esta pesquisa irá retorna todos os pacientes que possuem receitas com mais de dois medicamentos. 
db.pacientes.aggregate([{
    $match: {
      $expr: {
        $gte: [{
            $size: "$receitas.remedios"
          },
          2
        ]
      }
    }
  },
  {
    _id: 0
  }
]);


//consulta com pelo menos aggregate e group by; 
/* Apresenta o nome e  no máximo duas formas de contatos para os pacientes que moram em São Miguel de Taipu, agrupando-os pelo bairro. */
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

//consulta com pelo menos aggregate e lookup; 
/* Esta consulta apresenta o nome, especialidade a quantidade e o valor arrecado pelas consultas de todos os funcionários, presentes na clínica */
db.funcionarios.aggregate([{
    $lookup: {
      from: "pacientes",
      localField: "matricula",
      foreignField: "receitas.medico",
      as: "pacientes"
    }
  },
  {
    $unwind: "$pacientes"
  },
  {
    $group: {
      _id: {
        funcionario: "$nome",
        especialidade: "$especialidade.descricao"
      },
      quantidadePacientes: {
        $sum: 1
      },
      valorArrecadado: {
        $sum: "$especialidade.preco"
      }
    }
  },
  {
    $project: {
      _id: 0,
      funcionario: "$_id.funcionario",
      especialidade: "$_id.especialidade",
      quantidadePacientes: 1,
      valorArrecadado: 1
    }
  }
])

//outra consulta (robusta) a seu critério, dentro do contexto da aplicação. 
/* Esta consulta apresenta o nome do paciente, a quantidade de consultas realizadas para cada especialidade na clínica e no final, o valor_arrecadado de todas as consultas.*/
db.pacientes.aggregate([{
    $lookup: {
      from: "funcionarios",
      localField: "receitas.medico",
      foreignField: "matricula",
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
])