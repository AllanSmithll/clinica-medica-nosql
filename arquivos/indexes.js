//pacientes
db.pacientes.createIndex({ cpf: 1 }, { unique: true });

// funcionarios
db.funcionarios.createIndex({ "matricula": 1 }, { unique: true })
db.funcionarios.createIndex({ "cpf": 1 }, { unique: true })