//Esta pesquisa irá retorna todos os pacientes que possuem receitas com mais de dois medicamentos. 
db.pacientes.aggregate([
    {
      $match: {
        $expr: {
          $gte: [
            { $size: "$receitas.remedios" },
            2
          ]
        }
      }
    }
  ]);


  /*Apressenta o nome, cpf, data de nascimento e o telefone dos pacientes que moram no centro de São Miguel de Taipu */
  db.pacientes.find(
    {
      bairro: "centro",
      cidade: "são miguel de taipu"
    },
    {
      cpf: 1,
      nome: 1,
      dataNascimento: 1,
      telefones: 1
    }
  );