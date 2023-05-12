const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "fl_mail_scheduler",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: "pending",
      },
      content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      abo_regels_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      abo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fl_software_abo_auto_mail: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      schedule: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      klanten_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "fl_mail_scheduler",
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
