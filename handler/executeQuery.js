const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: '34.76.14.238',
	user: 'jousepalas',
	password: 'Hugo2006',
	database: 'fietslabyrinth',
	socketPath: `/cloudsql/mailerserver-386112:europe-west1:fietslabyrint`,
});

module.exports = async (query, values) => {
	try {
		const connection = await pool.getConnection();
		const [rows, fields] = await connection.execute(query, values);
		connection.release();
		return rows;
	} catch (error) {
		console.log(
			'🚀 ~ file: executeQuery.js ~ line 12 ~ executeQuery ~ error',
			error
		);
		return false;
	}
};
