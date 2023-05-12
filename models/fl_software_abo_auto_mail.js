const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "fl_software_abo_auto_mail",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      date_mail_2: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      mail_2: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      e_mail: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      abo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      klant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      auth: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      auth_original: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      bestelling_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bestelling_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      abo_years: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      abo_end_old: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      abo_end_new: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      serienummer: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "fl_software_abo_auto_mail",
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
