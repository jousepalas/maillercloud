require('dotenv').config({
	path: require('path').join(__dirname, '/../../.env'),
}).parsed;
const { env } = process;
const port = env.PORT || 5501;
const config = {
	env: env,
	port: port,
	db: {
		//Google Cloud SQL
		// host: '34.76.14.238',
		// username: 'jousepalas',
		// password: 'Hugo2006',
		// database: 'fietslabyrinth',
		// socketPath: `/cloudsql/mailerserver-386112:europe-west1:fietslabyrint`,
		// port: 3306,
		// dialect: 'mysql',

		// Localhost
		host: '127.0.0.1',
		username: 'root',
		password: 'root',
		database: 'fietslabyrinth',
		socketPath: `/cloudsql/mailerserver-386112:europe-west1:fietslabyrint`,
		port: 3306,
		dialect: 'mysql',
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
