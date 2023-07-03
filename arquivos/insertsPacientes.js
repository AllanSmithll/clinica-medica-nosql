// Pacientes de RUMCA
db.pacientes.insertOne({ cpf:'82691696191', nome: "Allan Amancio", estado_urgencia: 1, telefones: ['83982292523', '83986751649'], data_nascimento: ISODate("2004-11-04"), endereco: { rua: 'Rua Chá de Camomila', bairro: 'Centro', cidade: 'São Miguel de Taipu' }, receitas: [{ medico: ObjectId('64a1eb5eaa28d23aca3cfa3d'), data_realizacao: ISODate("2023-04-30"),data_validade_exame: ISODate("2023-05-30"), remedios: [{nome: 'Dipirona', descricao_uso: 'Dores de cabeça' }, { nome: 'Lentes para miopia', descricao_uso: 'Melhorar visão das proximidades' }, { nome: 'Lacribell', descricao_uso: 'Lubrificantes da córnea' }]}] })

// Pacientes de WILTON
db.pacientes.insertMany([
		{   cpf: '81763444962' , nome: 'João Silva' , estado_urgencia: 2 , telefones: ['83912345678', '83987654321'], data_nascimento: ISODate('1990-05-15'), endereco: {rua: 'Rua 2 de Novembro', bairo: 'Centro', cidade: 'São Miguel do Taipu'}, receitas: [{medico: ObjectId('64a20955aa28d23aca3cfa40'), data_realizacao: ISODate("2023-04-30"), data_validade_exame: ISODate("2023-05-30"), remedios:[{id:4, nome:'Proteção contra luz azul', descricao_uso: 'Dores de cabeça ao se expor à luz solar'}]   }]},
	])
