const {
  createData,
  deleteData,
  getData,
  getDataById,
  updateData,
} = require("./_model");

const Table = "reports";

const getReports = async () => {
  return await getData(Table);
};

const getReportById = async (id) => {
  return await getDataById(Table, id);
};

const createReport = async (report) => {
  return await createData(Table, report);
};

const updateReport = async (id, report) => {
  return await updateData(Table, report, id || 0);
};

const deleteReport = async (id) => {
  return await deleteData(Table, id);
};

module.exports = {
  getReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
};
