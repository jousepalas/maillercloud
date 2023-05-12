const { Op } = require("sequelize");
const { fl_software_abo_regels } = require("../models");
const models = require("../models");
const config = require("../config/config");

const getAllAbo = async () => {
  try {
    const abos = await fl_software_abo_regels.findAll({
      include: [models.fl_software_abo],
    });
    return abos;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_software_abo_regelsController.js:7 ~ getfabo ~ erro",
      error
    );
    return false;
  }
};

const getAboById = async (aboId) => {
  try {
    const abo = await fl_software_abo_regels.findOne({
      where: { id: aboId },
    });
    return abo;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_software_abo_regelsController.js:7 ~ getfabo ~ erro",
      error
    );
    return false;
  }
};

const getThreeDaysAboExp = async () => {
  try {
    const checkDate = new Date().getTime() + config.date.threeDays;
    const abos = await fl_software_abo_regels.findAll({
      where: {
        abo_date_end: {
          [Op.eq]: checkDate,
        },
      },
    });
    return abos;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_software_abo_regelsController.js:7 ~ getfabo ~ erro",
      error
    );
    return false;
  }
};

const getThreeDaysAboExpWithAssociation = async () => {
  try {
    const checkDate = new Date().getTime() + config.date.threeDays;
    const getAllInfo = await fl_software_abo_regels.findAll({
      where: {
        abo_date_end: {
          [Op.eq]: checkDate,
        },
      },
      include: [
        {
          model: models.fl_software_abo,
          as: "fl_software_abo",
          include: [
            {
              model: models.fl_bestelregel_levering,
              as: "fl_bestelregel_levering",
              include: [models.fl_klanten],
              where: {
                klant_id: {
                  [Op.ne]: 0,
                  [Op.ne]: null,
                  [Op.ne]: false,
                },
              },
            },
          ],
        },
      ],
    });
    return getAllInfo;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_software_abo_regels.js:69 ~ getThreeDaysAboExpWithAssociation ~ error",
      error
    );
    return false;
  }
};

const checkAboExpire = async () => {
  try {
    const allAbo = await getAllAbo();
    return allAbo;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_software_abo_regels.js:40 ~ checkAboExpire ~ error",
      error
    );
    return false;
  }
};

module.exports = {
  getAllAbo,
  getAboById,
  getThreeDaysAboExp,
  getThreeDaysAboExpWithAssociation,
};
