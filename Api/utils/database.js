const { Sequelize } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'Jackobo97.',
	database: 'Todos',
	port: 5432,
	logging: false,
});

module.exports = { db };
