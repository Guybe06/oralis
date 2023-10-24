const {
  createData,
  deleteData,
  getData,
  getDataById,
  updateData,
} = require("./_model");

const Table = "cashflow";

const getCashFlow = async () => {
  return await getData(Table);
};

const getCashFlowById = async (id) => {
  return await getDataById(Table, id);
};

const createCashFlow = async (cashFlow) => {
  return await createData(Table, cashFlow);
};

const updateCashFlow = async (id, cashFlow) => {
  return await updateData(Table, cashFlow, id || 0);
};

const deleteCashFlow = async (id) => {
  return await deleteData(Table, id);
};

module.exports = {
  getCashFlow,
  getCashFlowById,
  createCashFlow,
  updateCashFlow,
  deleteCashFlow,
};
