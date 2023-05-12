const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "fl_software_abo_auto_mail_log",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      e_mail: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      klant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      abo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      serienummer: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "fl_software_abo_auto_mail_log",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
