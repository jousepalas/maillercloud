const { fl_software_abo_auto_mail } = require("../models");

const createFlSoftwareAboAutoMail = async (flSoftwareAboAutoMailData) => {
  return fl_software_abo_auto_mail.create(flSoftwareAboAutoMailData);
};

module.exports = {
  createFlSoftwareAboAutoMail,
};
