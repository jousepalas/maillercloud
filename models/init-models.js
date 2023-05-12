var DataTypes = require("sequelize").DataTypes;
var _email = require("./email");
var _fl_bestelregel_levering = require("./fl_bestelregel_levering");
var _fl_klanten = require("./fl_klanten");
var _fl_mail_scheduler = require("./fl_mail_scheduler");
var _fl_software_abo = require("./fl_software_abo");
var _fl_software_abo_auto_mail = require("./fl_software_abo_auto_mail");
var _fl_software_abo_auto_mail_log = require("./fl_software_abo_auto_mail_log");
var _fl_software_abo_regels = require("./fl_software_abo_regels");
var _fl_software_mail_verleng_text = require("./fl_software_mail_verleng_text");
var _fl_software_serienummers = require("./fl_software_serienummers");

function initModels(sequelize) {
  var email = _email(sequelize, DataTypes);
  var fl_bestelregel_levering = _fl_bestelregel_levering(sequelize, DataTypes);
  var fl_klanten = _fl_klanten(sequelize, DataTypes);
  var fl_mail_scheduler = _fl_mail_scheduler(sequelize, DataTypes);
  var fl_software_abo = _fl_software_abo(sequelize, DataTypes);
  var fl_software_abo_auto_mail = _fl_software_abo_auto_mail(
    sequelize,
    DataTypes
  );
  var fl_software_abo_auto_mail_log = _fl_software_abo_auto_mail_log(
    sequelize,
    DataTypes
  );
  var fl_software_abo_regels = _fl_software_abo_regels(sequelize, DataTypes);
  var fl_software_mail_verleng_text = _fl_software_mail_verleng_text(
    sequelize,
    DataTypes
  );
  var fl_software_serienummers = _fl_software_serienummers(
    sequelize,
    DataTypes
  );

  return {
    email,
    fl_bestelregel_levering,
    fl_klanten,
    fl_mail_scheduler,
    fl_software_abo,
    fl_software_abo_auto_mail,
    fl_software_abo_auto_mail_log,
    fl_software_abo_regels,
    fl_software_mail_verleng_text,
    fl_software_serienummers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
