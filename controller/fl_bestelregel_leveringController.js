const { Op } = require('sequelize');
const { fl_bestelregel_levering } = require('../models');
const models = require('../models');

const getAllBestelregel = async () => {
	try {
		const bestelregelData = await fl_bestelregel_levering.findAll({
			include: [models.fl_klanten],
		});
		return bestelregelData;
	} catch (error) {
		console.log(
			'🚀 ~ file: fl_bestelregel_leveringController.js:10 ~ getAllBestelregel ~ error',
			error
		);
		return false;
	}
};

module.exports = {
	getAllBestelregel,
};
