const { Sequelize, Model, DataTypes } = require('sequelize');
const { db } = require('./config');

const createConnection = async (db) => {
	console.log('🚀 ~ file: db.js:5 ~ createConnection ~ db:', db);
	const sequelize = new Sequelize(db.database, db.username, db.password, {
		host: db.host,
		port: db.port,
		dialect: db.dialect,
	});
	await sequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch((err) => {
			console.log('Unable to connect to the database:', err);
		});
	return sequelize;
};
module.exports = createConnection;
