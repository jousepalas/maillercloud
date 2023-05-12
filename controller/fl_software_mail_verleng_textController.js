const { where } = require("sequelize");
const { fl_software_mail_verleng_text } = require("../models");

const getAllVerlengText = async () => {
  try {
    const klant = await fl_software_mail_verleng_text.findAll();
    return klant;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_software_mail_verleng_textController.js:7 ~ getfVerlengText ~ erro",
      error
    );
    return false;
  }
};

const getVerlengTextById = async (verlengTextId) => {
  try {
    const klant = await fl_software_mail_verleng_text.findOne({
      where: verlengTextId,
    });
    return klant;
  } catch (error) {
    console.log(
      "🚀 ~ file: fl_software_mail_verleng_textController.js:7 ~ getfVerlengText ~ erro",
      error
    );
    return false;
  }
};

module.exports = {
  getAllVerlengText,
  getVerlengTextById,
};
