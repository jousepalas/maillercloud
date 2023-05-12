const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const fl_bestelregel_levering = sequelize.define(
    "fl_bestelregel_levering",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      klaarmaken: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      klaarmaken_opmerking: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      klaarmaken_klaar: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      klaarmaken_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      klaarmaken_verwachte_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      levering_dealer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_code: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      bestelling_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bestelregel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bestelregel_abbo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      computer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      huur: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      huur_eind: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      huur_serienummer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tv_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_naam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      product_en: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      product_du: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      product_fr: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      knoppen_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      os_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sensor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      klant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "fl_klanten",
          key: "  id",
        },
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      leverdatum: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      leverdatum_duitsland: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      leverdatum_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      bestelnummer_extern: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      code_link: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      draad: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      fietstochten_opgestuurd: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      fietstochten_url_gestuurd: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      fietstochten_aantal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fietstochten_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      prijs_per_stuk: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      serienummer: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      aangesloten_op: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      ruimte: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      geleverd: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      geleverd_duitsland: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      omschrijving: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sorting: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_versie_1: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      fiets_e_mail: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      fiets_naam: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      abbo_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      abbo_soort: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      bijzonderheden: {
        type: DataTypes.STRING(1500),
        allowNull: false,
      },
      driver_user: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      serienummer_beweegtrainer: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      gfa_serienummer: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      gfa_serienummer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tl_deal_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_offerte_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_product_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_product_i: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      teamleader: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      route_op_maat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "fl_bestelregel_levering",
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
  fl_bestelregel_levering.associate = (models) => {
    models.fl_bestelregel_levering.fl_klanten =
      models.fl_bestelregel_levering.belongsTo(models.fl_klanten, {
        foreignKey: "klant_id",
      });
  };

  return fl_bestelregel_levering;
};
