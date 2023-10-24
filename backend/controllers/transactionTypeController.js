const {
  getTransactionTypes,
  getTransactionTypeById,
  createTransactionType,
  updateTransactionType,
  deleteTransactionType,
} = require("../models/transactionTypeModel");

const getTransactionTypeData = async () => {
  try {
    return await getTransactionTypes();
  } catch (error) {
    console.error("Erreur lors de la récupération des données de type de transaction:", error);
    throw new Error("Erreur lors de la récupération des données de type de transaction");
  }
};

const getTransactionTypeDataById = async (id) => {
  try {
    return await getTransactionTypeById(id);
  } catch (error) {
    console.error("Erreur lors de la récupération des données de type de transaction par ID:", error);
    throw new Error("Erreur lors de la récupération des données de type de transaction par ID");
  }
};

const createTransactionTypeData = async (data) => {
  try {
    const newTransactionType = data;
    return await createTransactionType(newTransactionType);
  } catch (error) {
    console.error("Erreur lors de la création des données de type de transaction:", error);
    throw new Error("Erreur lors de la création des données de type de transaction");
  }
};

const updateTransactionTypeData = async (id, data) => {
  try {
    const updatedTransactionType = data;
    return await updateTransactionType(id, updatedTransactionType);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données de type de transaction:", error);
    throw new Error("Erreur lors de la mise à jour des données de type de transaction");
  }
};

const deleteTransactionTypeData = async (id) => {
  try {
    return await deleteTransactionType(id);
  } catch (error) {
    console.error("Erreur lors de la suppression des données de type de transaction:", error);
    throw new Error("Erreur lors de la suppression des données de type de transaction");
  }
};

module.exports = {
  getTransactionTypeData,
  getTransactionTypeDataById,
  createTransactionTypeData,
  updateTransactionTypeData,
  deleteTransactionTypeData,
};
