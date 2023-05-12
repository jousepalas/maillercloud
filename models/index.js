'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

const config = require('../config/config').db;
const db = {};

let sequelize;
if (typeof config?.username !== 'string') {
	// sequelize = new Sequelize(process.env[fill this in].....);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, {
		host: config.host,
		port: config.port,
		dialect: 'mysql',
	});
}

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);
	})
	.forEach((file) => {
		const modelPath = path.join(__dirname, file);
		const model = require(modelPath)(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
