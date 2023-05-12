const config = require('./config/config');
const connection = require('./config/db')(config.db);

const { createConnection } = require('./config/db');

const { createEmailDataFunc } = require('./handler/getClientAboExpireTexMail');
const { CloudTasksClient } = require('@google-cloud/tasks');
const client = new CloudTasksClient();

async function createTask(createEmailData) {
	const queueName = `queue-${Date.now()}`;
	const parent = client.queuePath(
		'mailerserver-386112',
		'europe-west1',
		queueName
	);

	console.log(`parent output: ${parent}`);

	for (const abo_id in createEmailData) {
		const emailData = createEmailData[abo_id];

		const task = {
			appEngineHttpRequest: {
				httpMethod: 'POST',
				relativeUri: '/send-email',
				body: Buffer.from(JSON.stringify(emailData)).toString('base64'),
			},
		};

		const request = {
			parent,
			task,
		};

		const [response] = await client.createTask(request);
		console.log(`Task ${response.name} created. Queue name: ${queueName}`);
	}
}

// async function listQueues() {
//   const [queues] = await client.listQueues({
//     parent: client.projectPath("mailerserver-386112", "europe-west1-d"),
//   });

//   console.log("Queues:");
//   queues.forEach(queue => {
//     console.log(`- ${queue.name}`);
//   });
// }

// listQueues().catch(console.error);
exports.enqueueEmail = async (req, res) => {
	try {
		const createEmailData = await createEmailDataFunc();
		// console.log(
		// 	'🚀 ~ file: index.js:52 ~ exports.enqueueEmail= ~ createEmailData:',
		// 	createEmailData
		// );
		// await createTask(createEmailData);
		// await listQueues();
		return res
			.status(200)
			.json({ success: true, createEmailData: createEmailData });
	} catch (error) {
		console.log(
			'🚀 ~ file: index.js:18 ~ exports.enqueueEmail= ~ error:',
			error
		);
		return res
			.status(500)
			.json({ success: false, error: error, message: error.message });
	}
};
