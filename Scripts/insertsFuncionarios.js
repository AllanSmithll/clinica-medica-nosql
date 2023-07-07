// Funcionários supervisores
db.funcionarios.insertOne({
  matricula: 'JULME',
  nome: "Julieta Capuleto",
  cpf: '12345678901',
  data_nascimento: ISODate("1983-01-03"),
  data_admissao: ISODate("2020-05-12"),
  salario: 8000.00,
  cargo: 'Diretora',
  bonus_salario: 15
})
db.funcionarios.insertOne({
  matricula: 'METIA',
  nome: "Melissa Gracias",
  cpf: '39834594958',
  data_nascimento: ISODate("1990-11-07"),
  data_admissao: ISODate("2019-12-01"),
  crm: '123456',
  gerente: ObjectId("64a1e7a5aa28d23aca3cfa3b"),
  salario: 5500.00,
  cargo: 'Pediatra',
  bonus_salario: 15,
  especialidade: {
    descricao: 'Pediatria',
    preco: 120.00
  }
})

// Médicos
db.funcionarios.insertOne({
  matricula: 'RUMCA',
  nome: "Rubens Magno",
  cpf: '44355566472',
  data_nascimento: ISODate("1983-10-02"),
  data_admissao: ISODate("2021-12-01"),
  crm: '125756',
  gerente: ObjectId("64a1e945aa28d23aca3cfa3c"),
  salario: 5400.00,
  cargo: 'Oftalmologo',
  bonus_salario: 0,
  especialidade: {
    descricao: 'Oftalmologia',
    preco: 90.00
  }
})
db.funcionarios.insertOne({
  matricula: 'AMFRO',
  nome: "Amós Luís",
  cpf: '94859485934',
  data_nascimento: ISODate("2000-12-07"),
  data_admissao: ISODate("2021-12-01"),
  crm: '128084',
  gerente: ObjectId("64a1e945aa28d23aca3cfa3c"),
  salario: 5500.00,
  cargo: 'Pediatra',
  bonus_salario: 0,
  especialidade: {
    descricao: 'Pediatria',
    preco: 120.00
  }
})
db.funcionarios.insertOne({
  matricula: 'WILTN',
  nome: "Wilter Venenoso",
  cpf: '45563565367',
  data_nascimento: ISODate("1983-09-02"),
  data_admissao: ISODate("2019-09-01"),
  crm: '128089',
  gerente: ObjectId("64a1e945aa28d23aca3cfa3c"),
  salario: 5400.00,
  cargo: 'Oftalmologo',
  bonus_salario: 0,
  especialidade: {
    descricao: 'Oftalmologia',
    preco: 90.00
  }
})
db.funcionarios.insertOne({
  matricula: 'FEJSA',
  nome: "Felipe Jorge",
  cpf: '13424462564',
  data_nascimento: ISODate("1980-10-02"),
  data_admissao: ISODate("2020-12-01"),
  crm: '549854',
  gerente: ObjectId("64a1e945aa28d23aca3cfa3c"),
  salario: 5000.00,
  cargo: 'Otorrino',
  bonus_salario: 0,
  especialidade: {
    descricao: 'Otorrinolaringologia',
    preco: 150.00
  }
})
db.funcionarios.insertOne({
  matricula: 'LOSJF',
  nome: "Lorena Cerrana",
  cpf: '13424562564',
  data_nascimento: ISODate("1989-12-01"),
  data_admissao: ISODate("2020-11-01"),
  crm: '129454',
  gerente: ObjectId("64a1e945aa28d23aca3cfa3c"),
  salario: 5000.00,
  cargo: 'Otorrina',
  bonus_salario: 0,
  especialidade: {
    descricao: 'Otorrinolaringologia',
    preco: 150.00
  }
})

db.funcionarios.insertMany([{
    matricula: 'JULME',
    nome: 'Julieta Capuleto',
    cpf: '12345678901',
    data_nascimento: ISODate('1983-01-03'),
    data_admissao: ISODate('2020-05-12'),
    salario: 8000.00,
    cargo: 'Diretora',
    bonus_salario: 15
  },
  {
    matricula: 'METIA',
    nome: 'Melissa Gracias',
    cpf: '39834594958',
    data_nascimento: ISODate('1990-11-07'),
    data_admissao: ISODate('2019-12-01'),
    crm: '123456',
    gerente: ObjectId('64a1e7a5aa28d23aca3cfa3b'),
    salario: 5500.00,
    cargo: 'Pediatra',
    bonus_salario: 15,
    especialidade: {
      descricao: 'Pediatria',
      preco: 120.00
    }
  },
  {
    matricula: 'RUMCA',
    nome: 'Rubens Magno',
    cpf: '44355566472',
    data_nascimento: ISODate('1983-10-02'),
    data_admissao: ISODate('2021-12-01'),
    crm: '125756',
    gerente: ObjectId('64a1e945aa28d23aca3cfa3c'),
    salario: 5400.00,
    cargo: 'Oftalmologo',
    bonus_salario: 0,
    especialidade: {
      descricao: 'Oftalmologia',
      preco: 90.00
    }
  },
  {
    matricula: 'AMFRO',
    nome: 'Amós Luís',
    cpf: '94859485934',
    data_nascimento: ISODate('2000-12-07'),
    data_admissao: ISODate('2021-12-01'),
    crm: '128084',
    gerente: ObjectId('64a1e945aa28d23aca3cfa3c'),
    salario: 5500.00,
    cargo: 'Pediatra',
    bonus_salario: 0,
    especialidade: {
      descricao: 'Pediatria',
      preco: 120.00
    }
  },
  {
    matricula: 'WILTN',
    nome: 'Wilter Venenoso',
    cpf: '45563565367',
    data_nascimento: ISODate('1983-09-02'),
    data_admissao: ISODate('2019-09-01'),
    crm: '128089',
    gerente: ObjectId('64a1e945aa28d23aca3cfa3c'),
    salario: 5400.00,
    cargo: 'Oftalmologo',
    bonus_salario: 0,
    especialidade: {
      descricao: 'Oftalmologia',
      preco: 90.00
    }
  },
  {
    matricula: 'FEJSA',
    nome: 'Felipe Jorge',
    cpf: '13424462564',
    data_nascimento: ISODate('1980-10-02'),
    data_admissao: ISODate('2020-12-01'),
    crm: '549854',
    gerente: ObjectId('64a1e945aa28d23aca3cfa3c'),
    salario: 5000.00,
    cargo: 'Otorrino',
    bonus_salario: 0,
    especialidade: {
      descricao: 'Otorrinolaringologia',
      preco: 150.00
    }
  },
  {
    matricula: 'LOSJF',
    nome: 'Lorena Cerrana',
    cpf: '13424562564',
    data_nascimento: ISODate('1989-12-01'),
    data_admissao: ISODate('2020-11-01'),
    crm: '129454',
    gerente: ObjectId('64a1e945aa28d23aca3cfa3c'),
    salario: 5000.00,
    cargo: 'Otorrina',
    bonus_salario: 0,
    especialidade: {
      descricao: 'Otorrinolaringologia',
      preco: 150.00
    }
  }
]);


