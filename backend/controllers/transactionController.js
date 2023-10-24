const {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../models/transactionModel");

const getTransactionData = async () => {
  try {
    return await getTransactions();
  } catch (error) {
    console.error("Erreur lors de la récupération des données de transaction:", error);
    throw new Error("Erreur lors de la récupération des données de transaction");
  }
};

const getTransactionDataById = async (id) => {
  try {
    return await getTransactionById(id);
  } catch (error) {
    console.error("Erreur lors de la récupération des données de transaction par ID:", error);
    throw new Error("Erreur lors de la récupération des données de transaction par ID");
  }
};

const createTransactionData = async (data) => {
  try {
    const newTransaction = data;
    return await createTransaction(newTransaction);
  } catch (error) {
    console.error("Erreur lors de la création des données de transaction:", error);
    throw new Error("Erreur lors de la création des données de transaction");
  }
};

const updateTransactionData = async (id, data) => {
  try {
    const updatedTransaction = data;
    return await updateTransaction(id, updatedTransaction);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données de transaction:", error);
    throw new Error("Erreur lors de la mise à jour des données de transaction");
  }
};

const deleteTransactionData = async (id) => {
  try {
    return await deleteTransaction(id);
  } catch (error) {
    console.error("Erreur lors de la suppression des données de transaction:", error);
    throw new Error("Erreur lors de la suppression des données de transaction");
  }
};

module.exports = {
  getTransactionData,
  getTransactionDataById,
  createTransactionData,
  updateTransactionData,
  deleteTransactionData,
};
