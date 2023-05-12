const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const fl_software_abo_regels = sequelize.define(
    "fl_software_abo_regels",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      basis: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      oneindig: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      abo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "fl_software_abo",
          key: "id",
        },
      },
      abo_date_start: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      abo_months: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      abo_date_end: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      coupon_date_start: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      coupon_date_end: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      coupon_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      coupon_id_new: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      serienummer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date_order: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      doorlopend: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      anders: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      geactiveerd: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      factuur: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      dealer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      verkoop_country: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "nl",
      },
      bestelling_id_log: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      software_versie_log: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      online_updated: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      abo_end_not_equal: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      test_end_date: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "fl_software_abo_regels",
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
  fl_software_abo_regels.associate = (models) => {
    models.fl_software_abo_regels.fl_software_abo =
      models.fl_software_abo_regels.belongsTo(models.fl_software_abo, {
        foreignKey: "abo_id",
      });
  };

  return fl_software_abo_regels;
};
