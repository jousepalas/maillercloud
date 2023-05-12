const md5 = require('md5');
const config = require('../config/config');
const today = config.today;
const executeQuery = require('./executeQuery');
const { createMail } = require('../controller/emailController');
const {
	createFlSoftwareAboAutoMail,
} = require('../controller/fl_software_abo_auto_mailController');
const {
	getVerlengTextById,
} = require('../controller/fl_software_mail_verleng_textController');
const {
	getThreeDaysAboExpWithAssociation,
} = require('../controller/fl_software_abo_regelsController');
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

const createEmailDataFunc = async () => {
	let objFinal = {};
	let objFlSoftwareAboAutoMail = {};
	const [contentText, allAbo] = await Promise.all([
		getVerlengTextById(config.emailTag.autoEmail),
		getThreeDaysAboExpWithAssociation(),
	]);

	// console.log("All ABO!!!   :  ", allAbo)
	if (allAbo) {
		allAbo.map((aboExp) => {
			const validData =
				aboExp &&
				aboExp.fl_software_abo &&
				aboExp.fl_software_abo.fl_bestelregel_levering &&
				aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten != null;

			if (validData) {
				const email =
					aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten
						.algemeen_e_mail ||
					aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten
						.contactpersoon_2_mail ||
					'info@bikelabyrinth.com';
				const klant_id =
					aboExp.fl_software_abo.fl_bestelregel_levering.fl_klanten.id;
				const { auth, auth_original, generatedLink } = generateSubscriptionLink(
					klant_id,
					aboExp.abo_id
				);

				objFlSoftwareAboAutoMail[aboExp.abo_id] = {
					date: today,
					date_mail_2: today,
					mail_2: 'email',
					e_mail: email || '',
					abo_id: aboExp.abo_id,
					klant_id,
					auth,
					auth_original,
					bestelling_id: aboExp.fl_software_abo.bestelling_id,
					bestelling_date: today,
					serienummer: aboExp.serienummer_id,
					abo_years: aboExp.fl_software_abo.abo_years || 2023,
					abo_end_old: aboExp.abo_date_end,
					abo_end_new: aboExp.abo_date_end,
				};

				const content = prepareContent(aboExp, contentText.content);
				const subject = contentText.onderwerp;
				const token = generateRandomString(32);

				const report = emailCreated(aboExp);
				objFinal[aboExp.abo_id] = {
					userId: klant_id,
					aboId: aboExp.abo_id,
					email,
					subject,
					content,
					token,
					schedule_type: today,
					report,
					status: 'created',
					generatedLink,
				};
			}
		});

		Object.keys(objFinal).forEach((obj) => {
			return Promise.all([
				createMail(objFinal[obj]),
				createFlSoftwareAboAutoMail(objFlSoftwareAboAutoMail[obj]),
			]);
		});
	} // end if

	// return objFinal;
	return allAbo;
};

module.exports = {
	createEmailDataFunc,
	generateSubscriptionLink,
	prepareContent,
	replaceSubscriptionLinkTag,
	substituteContents,
	genereateMdFive,
	generateRandomString,
	emailCreated,
	createFlSoftwareAboAutoMail,
	createMail,
	getVerlengTextById,
	getThreeDaysAboExpWithAssociation,
};
