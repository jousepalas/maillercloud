const { where } = require("sequelize");
const models = require("../models");
const { fl_klanten } = models;

const getAllKlanten = async () => {
  try {
    const klant = await fl_klanten.findAll();
    return klant;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_klantenController.js:7 ~ getKlanten ~ erro",
      error
    );
    return false;
  }
};

const getOneKlanten = async (search) => {
  try {
    const klant = await fl_klanten.findOne({
      where: search,
    });
    return klant;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_klantenController.js:7 ~ getKlanten ~ erro",
      error
    );
    return false;
  }
};

module.exports = {
  getAllKlanten,
  getOneKlanten,
};
