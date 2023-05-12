const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	const fl_software_serienummers = sequelize.define(
		'fl_software_serienummers',
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			abo_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			serienummer_first: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			serienummer: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			gebruikt: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			date: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			stats_date_last: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			passwordhash: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: 'fl_software_serienummers',
			timestamps: false,
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'id' }],
				},
			],
		}
	);
	fl_software_serienummers.associate = (models) => {
		models.fl_software_serienummers.fl_software_abo_regels =
			models.fl_software_serienummers.belongsTo(models.fl_software_abo_regels, {
				foreignKey: 'serienummer_id',
			});
	};
	return fl_software_serienummers;
};
