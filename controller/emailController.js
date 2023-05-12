const { email } = require("../models");
const Sequelize = require("sequelize");

const createMail = async (mailData) => {
  return email.create(mailData);
};

const getQueuedMail = async (payload) => {
  const queuedMailData = await email.findOne({
    where: {
      token: payload.token,
      aboId: payload.aboId,
    },
  });
  return queuedMailData;
};

const getAllEmails = async () => {
  const reportData = await email.findAll({
    attributes: ["report", "queueId", "schedule_type", "aboId"],
  });
  return reportData;
};

const getEmailById = async (aboId) => {
  const reportData = await email.findAll({
    where: {
      aboId: aboId,
    },
    attributes: ["report", "queueId", "schedule_type", "aboId"],
  });
  return reportData;
};

const updateMailReport = async (mailReport) => {
  const reportData = await email.findOne({
    where: {
      aboId: mailReport.aboId,
      token: mailReport.token,
    },
  });

  const updatedReportData = [...reportData?.report, mailReport];

  const result = await email.update(
    {
      report: updatedReportData,
      queueId: mailReport.queueId,
      status: mailReport.status,
    },
    {
      where: {
        aboId: mailReport.aboId,
        token: mailReport.token,
      },
    }
  );

  return result;
};

const updateNumTries = async (mailData) => {
  const result = email.update(
    {
      num_tries: Sequelize.literal("num_tries + 1"),
    },
    {
      where: {
        aboId: mailData.aboId,
        token: mailData.token,
      },
    }
  );

  return result;
};

module.exports = {
  createMail,
  getQueuedMail,
  getAllEmails,
  updateMailReport,
  updateNumTries,
  getEmailById,
};
