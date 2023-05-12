const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const fl_software_abo = sequelize.define(
    "fl_software_abo",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      bestelling_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "fl_bestelregel_levering",
          key: "bestelling_id",
        },
      },
      bestelling_computerwissel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bestelling_no: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      stilzwijgende_verlenging: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      date_activatie_first: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      opmerking: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      dealer_klant: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dealer_adres: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dealer_postcode: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dealer_plaats: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dealer_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dealer_dpt: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dealer_info: {
        type: DataTypes.STRING(800),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      no_abo_reason: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      no_abo: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      no_abo_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "fl_software_abo",
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
  fl_software_abo.associate = (models) => {
    models.fl_software_abo.fl_bestelregel_levering =
      models.fl_software_abo.belongsTo(models.fl_bestelregel_levering, {
        foreignKey: "bestelling_id",
      });
  };

  return fl_software_abo;
};
