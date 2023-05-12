const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "fl_klanten",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      offerte_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categorie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 4,
      },
      buitenland: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      dealer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tep: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      vat: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: "klant",
      },
      soort: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      soort_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dealer: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      dealer_intern_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      naam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      koepel: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      koepel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adres: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      postcode: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      plaats: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      plaats_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      land: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      omschrijving: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      date_frame: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      date_first: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      extra_info: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      algemeen_tel: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      algemeen_e_mail: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      contactpersoon_1: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contactpersoon_1_voornaam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_1_tussenvoegsel: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_1_achternaam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_2_voornaam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_2_tussenvoegsel: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_2_achternaam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_3_voornaam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_3_tussenvoegsel: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_3_achternaam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_1_beroep: {
        type: DataTypes.STRING(400),
        allowNull: false,
      },
      contactpersoon_2: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      contactpersoon_2_beroep: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      contactpersoon_3: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      contactpersoon_4: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      contactpersoon_5: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      contactpersoon_2_tel: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      contactpersoon_2_mail: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      contactpersoon_3_beroep: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      contactpersoon_3_tel: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      contactpersoon_3_mail: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      maps: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      klantnummer: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contact_via: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      filename: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      regel_1: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      regel_2: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      regel_3: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      regel_4: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      regel_5: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      regel_6: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      regel_7: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      fiets_e_mail: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      fiets_naam: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      wifi_pass: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      wifi_uitleg: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      vip: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      hierarchie: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      herkomst: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      post_marketing: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      alg_mail_verleng: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      licentie_mail: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      tl_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_added: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tl_updated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tl_web_url: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_country: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      tl_json: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tl_accountmanager_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_contact_added: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tl_contact_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tl_contact_web_url: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_contact_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_contact_json: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tl_contactpersoon_1_verleng: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      tl_fac_addressee: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_fac_line1: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_fac_zip: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_fac_city: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_fac_country: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_fac_factuur_mailadres: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_fac_factuur_mailadres_2: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_fac_factuur_mailadres_3: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_afl_addressee: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_afl_line1: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_afl_zip: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_afl_city: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_afl_country: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      tl_synced: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "fl_klanten",
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
