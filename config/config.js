require('dotenv').config({
	path: require('path').join(__dirname, '/../../.env'),
}).parsed;
const { env } = process;
const port = env.PORT || 5501;
const config = {
	env: env,
	port: port,
	db: {
		host: env.HOST,
		username: env.USERNAME,
		password: env.PASSWORD,
		database: env.DATABASE,
		socketPath: env.SOCKETPATH,
		port: env.GCP_PORT,
		dialect: env.DIALECT,
	},
	dataVersion: '1.0.0',
	cors: {
		exposedHeaders: ['Content-Length', 'Content-Type', 'auth-token'],
	},
	pagination: {
		limit: 1000,
	},
	date: {
		threeDays: 259200000,
		oneMonth: '',
		twoMonths: '',
	},
	emailTag: {
		oneMonthAlert: { id: 3 },
		twoMonthAlert: { id: 1 },
		subscriptionExpire: { id: 2 },
		autoEmail: { id: 8 },
		layout: 'fl_template',
		subject: '[ Notification ] => 3 days to renew subscription',
	},
	regExpModel: 'fl_',
	invalidModels: ['undefined', 'sequelize', 'Sequelize'],
	today: new Date().toISOString().slice(0, 10),
};

module.exports = config;
