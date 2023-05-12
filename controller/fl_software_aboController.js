const { Op } = require('sequelize');
const { fl_software_abo } = require('../models');
const models = require('../models');

const getAllSoftwareAbo = async () => {
	try {
		const softwareAbo = await fl_software_abo.findAll({
			include: [models.fl_bestelregel_levering],
		});

		return softwareAbo;
	} catch (error) {
		console.log(
			'🚀 ~ file: fl_software_abo.js:12 ~ getAllSoftwareAbo ~ error',
			error
		);
		return false;
	}
};
const getSoftwareAboByPk = async () => {
	try {
		const softwareAbo = await fl_software_abo.findByPk(1387);
		return softwareAbo;
	} catch (error) {
		console.log(
			'🚀 ~ file: fl_software_abo.js:28 ~ getSoftwareAboById= ~ error',
			error
		);
		return false;
	}
};

module.exports = {
	getAllSoftwareAbo,
	getSoftwareAboByPk,
};
