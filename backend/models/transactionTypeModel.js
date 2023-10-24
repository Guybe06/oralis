const {
  createData,
  deleteData,
  getData,
  getDataById,
  updateData,
} = require("./_model");

const Table = "transactiontypes";

const getTransactionTypes = async () => {
  return await getData(Table);
};

const getTransactionTypeById = async (id) => {
  return await getDataById(Table, id);
};

const createTransactionType = async (transactionType) => {
  return await createData(Table, transactionType);
};

const updateTransactionType = async (id, transactionType) => {
  return await updateData(Table, transactionType, id || 0);
};

const deleteTransactionType = async (id) => {
  return await deleteData(Table, id);
};

module.exports = {
  getTransactionTypes,
  getTransactionTypeById,
  createTransactionType,
  updateTransactionType,
  deleteTransactionType,
};
