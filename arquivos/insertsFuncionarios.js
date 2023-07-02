// Funcionários supervisores
db.funcionarios.insertOne({ matricula:'JULME', nome: "Julieta Capuleto", cpf: '12345678901', data_nascimento: ISODate("1983-01-03"), data_admissao: ISODate("2020-05-12"), salario: 8000.00, cargo: 'Diretora', bonus_salario: 15 })
db.funcionarios.insertOne({ matricula:'METIA', nome: "Melissa Gracias", cpf: '39834594958', data_nascimento: ISODate("1990-11-07"), data_admissao: ISODate("2019-12-01"), crm: '123456', gerente: ObjectId("64a1e7a5aa28d23aca3cfa3b"), salario: 5500.00, cargo: 'Pediatra', bonus_salario: 15 })

// Médicos
db.funcionarios.insertOne({ matricula:'RUMCA', nome: "Rubens Magno", cpf: '44355566472', data_nascimento: ISODate("1983-10-02"), data_admissao: ISODate("2021-12-01"), crm: '125756', gerente: ObjectId("64a1e945aa28d23aca3cfa3c"), salario: 5400.00, cargo: 'Oftalmologo', bonus_salario: 0 })