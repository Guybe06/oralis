const {
  createData,
  deleteData,
  getData,
  getDataById,
  updateData,
} = require("./_model");

const Table = "transactions";

const getTransactions = async () => {
  return await getData(Table);
};

const getTransactionById = async (id) => {
  return await getDataById(Table, id);
};

const createTransaction = async (transaction) => {
  return await createData(Table, transaction);
};

const updateTransaction = async (id, transaction) => {
  return await updateData(Table, transaction, id || 0);
};

const deleteTransaction = async (id) => {
  return await deleteData(Table, id);
};

module.exports = {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
