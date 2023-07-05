// Pacientes de RUMCA
db.pacientes.insertOne({
  cpf: '82691696191',
  nome: "Allan Amancio",
  estado_urgencia: 1,
  telefones: [
    '83982292523',
    '83986751649'
  ],
  data_nascimento: ISODate("2004-11-04"),
  endereco: {
    rua: 'Rua Chá de Camomila',
    bairro: 'Centro',
    cidade: 'São Miguel de Taipu'
  },
  receitas: [{
    id: 1,
    medico: ObjectId('64a1eb5eaa28d23aca3cfa3d'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade_exame: ISODate("2023-05-30"),
    remedios: [{
      id: 1,
      nome: 'Dipirona',
      descricao_uso: 'Dores de cabeça'
    }, {
      id: 2,
      nome: 'Lentes para miopia',
      descricao_uso: 'Melhorar visão das proximidades'
    }, {
      id: 3,
      nome: 'Lacribell',
      descricao_uso: 'Lubrificantes da córnea'
    }]
  }]
})

db.pacientes.insertOne({
  cpf: "61814352624",
  nome: "Ana Oliveira",
  estado_urgencia: 1,
  telefones: ["83944444444"],
  data_nascimento: ISODate("1995-07-02"),
  endereco: {
    rua: "Avenida São Jorge",
    bairro: "Centro",
    cidade: "São Miguel de Taipu"
  },
  receitas: [{
    id: 5,
    medico: ObjectId('64a1eb5eaa28d23aca3cfa3d'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade: ISODate("2023-05-30"),
    remedios: [{
      id: 9,
      nome: "Lentes para astigmatismo",
      descricao_uso: "Dificuldades para enxergar"
    }]
  }]
})

// Pacientes de WILTIN
db.pacientes.insertOne({
  cpf: '81763444962',
  nome: 'João Silva',
  estado_urgencia: 2,
  telefones: ['83912345678', '83987654321'],
  data_nascimento: ISODate('1990-05-15'),
  endereco: {
    rua: 'Rua 2 de Novembro',
    bairro: 'Centro',
    cidade: 'São Miguel do Taipu'
  },
  receitas: [{
    id: 2,
    medico: ObjectId('64a20955aa28d23aca3cfa40'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade_exame: ISODate("2023-05-30"),
    remedios: [{
      id: 4,
      nome: 'Proteção contra luz azul',
      descricao_uso: 'Alivia dores contra luz de eletroeletrônicos'
    }]
  }]
})

// Pacientes de AMFRO
db.pacientes.insertOne({
  cpf: '30729081210',
  nome: 'Maria Souza',
  estado_urgencia: 1,
  telefones: ['83911111111', '83922222222'],
  data_nascimento: ISODate('1985-09-20'),
  endereco: {
    rua: 'Rua Laranja',
    bairro: 'Café no Vento',
    cidade: 'Sobrado'
  },
  receitas: [{
    id: 3,
    medico: ObjectId('64a2072baa28d23aca3cfa3f'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade_exame: ISODate("2023-05-30"),
    remedios: [{
      id: 5,
      nome: 'Dextrometorfano',
      descricao_uso: 'Alivia a tosse'
    }, {
      id: 6,
      nome: 'Guaifenesina',
      descricao_uso: 'Xarope expectorante'
    }]
  }]
})

db.pacientes.insertOne({
  cpf: '73536904461',
  nome: 'Bruna Bastos',
  estado_urgencia: 4,
  telefones: [
    '83911112222'
  ],
  data_nascimento: ISODate('2000-02-20'),
  endereco: {
    rua: 'Rua das Flores',
    bairro: 'Centro',
    cidade: 'São Miguel de Taipu'
  },
  receitas: [{
    id: 8,
    medico: ObjectId('64a2072baa28d23aca3cfa3f'),
    data_realizacao: ISODate('2023-05-01'),
    data_validade: ISODate('2023-06-01'),
    remedios: [{
      id: 11,
      nome: 'Clorfeniramina',
      descricao_uso: 'Medicação para alergia'
    }]
  }]
})

// Pacientes de FEJSA
db.pacientes.insertOne({
  cpf: '17583999459',
  nome: 'Pedro Santos',
  estado_urgencia: 3,
  telefones: ['83933333333'],
  data_nascimento: ISODate('2000-03-10'),
  endereco: {
    rua: 'Rua Batista',
    bairro: 'Centro',
    cidade: 'São Miguel do Taipu'
  },
  receitas: [{
    id: 4,
    medico: ObjectId('64a20a78aa28d23aca3cfa41'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade_exame: ISODate("2023-05-30"),
    remedios: [{
      id: 7,
      nome: 'Amoxicilina',
      descricao_uso: 'Combate a pneumonia'
    }, {
      id: 8,
      nome: 'Clavulanato de potássio',
      descricao_uso: 'Combate infecções'
    }]
  }]
})

db.pacientes.insertOne({
  cpf: '24874727359',
  nome: 'Carlos Cunha',
  estado_urgencia: 1,
  telefones: [
    '83933334444',
    '83955556666'
  ],
  data_nascimento: ISODate('1985-05-05'),
  endereco: {
    rua: 'Av. Paulista',
    bairro: 'Bela Vista',
    cidade: 'Pilar'
  },
  receitas: [{
    id: 9,
    medico: ObjectId('64a20a78aa28d23aca3cfa41'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade_exame: ISODate("2023-05-15"),
    remedios: [{
      id: 12,
      nome: 'Dramin',
      descricao_uso: 'Tratamento para labirintite'
    }, {
      id: 13,
      nome: 'Betahistina',
      descricao_uso: 'Tratamento para labirintite'
    }]
  }]
})

// Pacientes de METIA
db.pacientes.insertOne({
  cpf: '98521676000',
  nome: 'Lucas Rodrigues',
  estado_urgencia: 2,
  telefones: ['83955555555'],
  data_nascimento: ISODate('1980-12-30'),
  endereco: {
    rua: 'Avenida Josemar',
    bairro: 'Amarelas',
    cidade: 'Pilar'
  },
  receitas: [{
    id: 6,
    medico: ObjectId('64a1e945aa28d23aca3cfa3c'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade_exame: ISODate("2023-05-30"),
    remedios: [{
      id: 10,
      nome: 'Tríplice viral',
      descricao_uso: 'Vacina para 3 vírus'
    }]
  }]
})

db.pacientes.insertOne({
  cpf: '00593248718',
  nome: 'Daniela Duarte',
  estado_urgencia: 2,
  telefones: ['83977778888'],
  data_nascimento: ISODate('1972-10-22'),
  endereco: {
    rua: 'Avenida Josemar',
    bairro: 'Amarelas',
    cidade: 'Pilar'
  },
  receitas: [{
    id: 10,
    medico: ObjectId('64a1e945aa28d23aca3cfa3c'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade_exame: ISODate("2023-06-15"),
    remedios: [{
      id: 1,
      nome: 'Dipirona',
      descricao_uso: 'Dores de cabeça'
    }, {
      id: 14,
      nome: 'Diane 35',
      descricao_uso: 'Anticoncepcional oral'
    }]
  }]
})

// Pacientes de LOSJF
db.pacientes.insertOne({
  cpf: '82691692345',
  nome: 'Pedro Alves',
  estado_urgencia: 3,
  telefones: [
    '83912345678',
    '83998765432'
  ],
  data_nascimento: ISODate('1998-12-10'),
  endereco: {
    rua: 'Rua dos Bobos',
    bairro: 'Itabaiana',
    cidade: 'Pilar'
  },
  receitas: [{
    id: 7,
    medico: ObjectId('64a20bdfaa28d23aca3cfa42'),
    data_realizacao: ISODate("2023-04-30"),
    data_validade: ISODate("2023-05-30"),
    remedios: [{
      id: 10,
      nome: "Tríplice viral",
      descricao_uso: "Vacina contra rubéola"
    }]
  }]
})

// Pacientes sem médico
db.pacientes.insertOne({
  cpf: '59485598603',
  nome: 'Lucas Alvares',
  estado_urgencia: 5,
  data_nascimento: ISODate('2004-11-03'),
  endereco: {
    rua: 'Marieta Araujo',
    bairro: 'Ernani Satiro',
    cidade: 'João Pessoa'
  },
})