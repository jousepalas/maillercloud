const created = new Date().toISOString().slice(0, 10);
const generateBodyReport = (payload) => {
	const { aboId, queueId, token } = payload;
	return { aboId, queueId, token };
};

const emailCreated = (payload) => {
	const { aboId, queueId, token } = generateBodyReport(payload);
	return [
		{
			created,
			aboId,
			queueId,
			token,
			status: 'record created',
			message: `Email record created at ${new Date()}, not queued yet`,
		},
	];
};

const emailEnqueued = (objEmail) => {
	const { aboId, queueId, email, token } = objEmail;

	const reportData = {
		created,
		aboId,
		queueId,
		token,
		status: 'enqueued',
		message: `Email to ${email}, enqueued with id: ${queueId} at ${new Date()}`,
	};
	return reportData;
};

const emailDequeued = (objEmail) => {
	const { aboId, queueId, email, token } = objEmail;
	return {
		created,
		aboId,
		queueId,
		token,
		status: 'denqueued',
		message: `Email to ${email}, denqueued with id: ${queueId} at ${new Date()}`,
	};
};

const emailSent = (objEmail) => {
	const { aboId, queueId, email, token } = objEmail;
	return {
		created,
		aboId,
		queueId,
		token,
		status: 'email sent',
		message: `Email to ${email}, sent at ${new Date()}`,
	};
};

const emailFailureSent = (objEmail) => {
	const { aboId, queueId, email, token } = objEmail;
	return {
		created,
		aboId,
		queueId,
		token,
		status: 'email fail to sent',
		message: `Email to ${email}, fail to sent at ${new Date()}`,
	};
};

const errorEmail = (objEmail) => {
	const { aboId, queueId, email, token, error } = objEmail;
	return {
		created,
		aboId,
		queueId,
		token,
		status: 'error',
		error,
		message: `Email to ${email}, error at ${new Date()}`,
	};
};

module.exports = {
	emailCreated,
	emailEnqueued,
	emailDequeued,
	emailSent,
	emailFailureSent,
	errorEmail,
};
