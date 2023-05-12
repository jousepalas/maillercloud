const md5 = require('md5');
const executeQuery = require('./executeQuery');
const { emailCreated } = require('./emailReport');

const substituteContents = (contents, substObj) => {
	for (let key in substObj) {
		contents = contents.split(key).join(substObj[key]);
	}
	return contents;
};
const replaceSubscriptionLinkTag = (authOriginal, klantId, aboId) => {
	const substitutionTag = {
		'[AUTH_ORIGINAL]': authOriginal,
		'[KLANT_ID]': klantId,
		'[ABO_ID]': aboId,
	};
	const result = substituteContents(
		`https://www.mijnfl.nl/verleng/?pub_id=[AUTH_ORIGINAL]&amp;y_ww=87[KLANT_ID]43&amp;rv=31[ABO_ID]77`,
		substitutionTag
	);
	return result;
};
const prepareContent = (aboExp, contentText) => {
	const substitutionTag = {
		'[klantnaam]':
			aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten.naam,
		'[serienummer]': aboExp.serienummer_id,
		'[abo_end]': aboExp.abo_date_end,
	};
	const result = substituteContents(contentText, substitutionTag);
	return result;
};

const genereateMdFive = (textData) => {
	return md5(textData);
};

const generateRandomString = (length) => {
	let result = '';
	const characters =
		'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

const generateSubscriptionLink = (klant_id, abo_id) => {
	const auth_original = generateRandomString(15);
	const auth = genereateMdFive(auth_original);
	const generatedLink = replaceSubscriptionLinkTag(
		auth_original,
		klant_id,
		abo_id
	);
	return { auth, auth_original, generatedLink };
};

module.exports = async () => {
	// let objFinal = {};
	// let objFlSoftwareAboAutoMail = {};
	const [contentText, allAbo] = await Promise.all([
		executeQuery(`SELECT * FROM fl_software_mail_verleng_text WHERE id = ?`, [
			8,
		]),
		executeQuery(
			// 11 May
			// 			`SELECT *
			// FROM fl_software_abo_regels
			// JOIN fl_software_abo ON fl_software_abo_regels.abo_id = fl_software_abo.id
			// JOIN fl_bestelregel_levering ON fl_software_abo.bestelling_id = fl_bestelregel_levering.id
			// JOIN fl_klanten ON fl_bestelregel_levering.klant_id = fl_klanten.id
			// WHERE abo_date_end = DATE_ADD(CURDATE(), INTERVAL 3 DAY)
			// `,

			//12 May
			// `SELECT
			//   fl_software_abo_regels.id AS abo_regels_id,
			//   GROUP_CONCAT(DISTINCT fl_bestelregel_levering.id SEPARATOR ',') AS bestelregel_levering_ids,
			//   GROUP_CONCAT(DISTINCT fl_klanten.id SEPARATOR ',') AS klanten_ids,
			//   GROUP_CONCAT(DISTINCT fl_software_abo.id SEPARATOR ',') AS software_abo_ids
			// FROM fl_software_abo_regels
			// LEFT JOIN fl_software_abo ON fl_software_abo_regels.abo_id = fl_software_abo.id
			// LEFT JOIN fl_bestelregel_levering ON fl_software_abo.bestelling_id = fl_bestelregel_levering.id
			// LEFT JOIN fl_klanten ON fl_bestelregel_levering.klant_id = fl_klanten.id
			// WHERE abo_date_end = DATE_ADD(CURDATE(), INTERVAL 3 DAY)
			// GROUP BY abo_regels_id;
			// `,
			`SELECT *
FROM fl_software_abo_regels AS regels
LEFT JOIN fl_software_abo AS abo ON regels.abo_id = abo.id
LEFT JOIN fl_bestelregel_levering AS levering ON abo.bestelling_id = levering.id
LEFT JOIN fl_klanten AS klanten ON levering.klant_id = klanten.id
WHERE regels.abo_date_end = DATE_ADD(CURDATE(), INTERVAL 3 DAY)
`,
			[]
		),
	]);

	// console.log("All ABO!!!   :  ", allAbo)
	// if(allAbo) {
	// allAbo.map((aboExp) => {
	// 	const validData =
	// 		aboExp &&
	// 		aboExp.fl_software_abo &&
	// 		aboExp.fl_software_abo.fl_bestelregel_levering &&
	// 		aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten != null;

	// 	if (validData) {
	// 		const email =
	// 			aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten
	// 				.algemeen_e_mail ||
	// 			aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten
	// 				.contactpersoon_2_mail ||
	// 			'info@bikelabyrinth.com';
	// 		const klant_id =
	// 			aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten.id;
	// 		const { auth, auth_original, generatedLink } = generateSubscriptionLink(
	// 			klant_id,
	// 			aboExp.abo_id
	// 		);

	// 		objFlSoftwareAboAutoMail[aboExp.abo_id] = {
	// 			date: today,
	// 			date_mail_2: today,
	// 			mail_2: 'email',
	// 			e_mail: email || '',
	// 			abo_id: aboExp.abo_id,
	// 			klant_id,
	// 			auth,
	// 			auth_original,
	// 			bestelling_id: aboExp.fl_software_abo.bestelling_id,
	// 			bestelling_date: today,
	// 			serienummer: aboExp.serienummer_id,
	// 			abo_years: aboExp.fl_software_abo.abo_years || 2023,
	// 			abo_end_old: aboExp.abo_date_end,
	// 			abo_end_new: aboExp.abo_date_end,
	// 		};

	// 		const content = prepareContent(aboExp, contentText.content);
	// 		const subject = contentText.onderwerp;
	// 		const token = generateRandomString(32);

	// 		const report = emailCreated(aboExp);
	// 		objFinal[aboExp.abo_id] = {
	// 			userId: klant_id,
	// 			aboId: aboExp.abo_id,
	// 			email,
	// 			subject,
	// 			content,
	// 			token,
	// 			schedule_type: today,
	// 			report,
	// 			status: 'created',
	// 			generatedLink,
	// 		};
	// 	}
	// });

	// Object.keys(objFinal).forEach((obj) => {
	// 	return Promise.all([
	// 		executeQuery(
	// 			`INSERT INTO email (userId, aboId, email, subject, content, token, schedule_type, report, status)
	// 			VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
	// 			[
	// 				emailObj.userId,
	// 				emailObj.aboId ? `'${emailObj.aboId}'` : null,
	// 				emailObj.email ? `'${emailObj.email}'` : null,
	// 				emailObj.subject ? `'${emailObj.subject}'` : null,
	// 				emailObj.content ? `'${emailObj.content}'` : null,
	// 				emailObj.token,
	// 				emailObj.schedule_type,
	// 				emailObj.report ? JSON.stringify(emailObj.report) : null,
	// 				emailObj.status,
	// 			]
	// 		),
	// 		executeQuery(
	// 			`INSERT INTO fl_software_abo_auto_mail (
	// 			date,
	// 			date_mail_2,
	// 			mail_2,
	// 			e_mail,
	// 			abo_id,
	// 			klant_id,
	// 			auth,
	// 			auth_original,
	// 			bestelling_id,
	// 			bestelling_date,
	// 			abo_years,
	// 			abo_end_old,
	// 			abo_end_new,
	// 			serienummer
	// 		)
	// 		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
	// 			[
	// 				objFlSoftwareAboAutoMail[obj].date,
	// 				objFlSoftwareAboAutoMail[obj].date_mail_2,
	// 				objFlSoftwareAboAutoMail[obj].mail_2,
	// 				objFlSoftwareAboAutoMail[obj].e_mail,
	// 				objFlSoftwareAboAutoMail[obj].abo_id,
	// 				objFlSoftwareAboAutoMail[obj].klant_id,
	// 				objFlSoftwareAboAutoMail[obj].auth,
	// 				objFlSoftwareAboAutoMail[obj].auth_original,
	// 				objFlSoftwareAboAutoMail[obj].bestelling_id,
	// 				objFlSoftwareAboAutoMail[obj].bestelling_date,
	// 				objFlSoftwareAboAutoMail[obj].abo_years,
	// 				objFlSoftwareAboAutoMail[obj].abo_end_old,
	// 				objFlSoftwareAboAutoMail[obj].abo_end_new,
	// 				objFlSoftwareAboAutoMail[obj].serienummer,
	// 			]
	// 		),
	// 	]);
	// });
	// }// end if

	// return objFinal;
	return { allAbo, contentText };
};
