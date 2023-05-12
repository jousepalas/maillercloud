const { UUIDV4 } = require("sequelize");
const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "email",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      aboId: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      subject: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: UUIDV4,
      },
      queueId: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      schedule_type: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      sent_at: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      num_tries: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      report: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      sequelize,
      tableName: "email",
      timestamps: true,
      paranoid: true,
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
