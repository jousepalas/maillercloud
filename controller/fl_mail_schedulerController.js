const { fl_mail_scheduler } = require("../models");
const { Op } = require("sequelize");
const config = require("../config/config");

const createMailOther = async (mailData) => {
  return fl_mail_scheduler.create(mailData);
};

const getPending = async () => {
  return fl_mail_scheduler.findAll({
    where: {
      status: {
        [Op.eq]: "pending",
      },
    },
  });
};

module.exports = {
  createMailOther,
  getPending,
};
