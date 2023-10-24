const {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../models/departmentModel");

const getDepartmentData = async () => {
  try {
    return await getDepartments();
  } catch (error) {
    console.error("Erreur lors de la récupération des données de département:", error);
    throw new Error("Erreur lors de la récupération des données de département");
  }
};

const getDepartmentDataById = async (id) => {
  try {
    return await getDepartmentById(id);
  } catch (error) {
    console.error("Erreur lors de la récupération des données de département par ID:", error);
    throw new Error("Erreur lors de la récupération des données de département par ID");
  }
};

const createDepartmentData = async (data) => {
  try {
    const newDepartment = data;
    return await createDepartment(newDepartment);
  } catch (error) {
    console.error("Erreur lors de la création des données de département:", error);
    throw new Error("Erreur lors de la création des données de département");
  }
};

const updateDepartmentData = async (id, data) => {
  try {
    const updatedDepartment = data;
    return await updateDepartment(id, updatedDepartment);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données de département:", error);
    throw new Error("Erreur lors de la mise à jour des données de département");
  }
};

const deleteDepartmentData = async (id) => {
  try {
    return await deleteDepartment(id);
  } catch (error) {
    console.error("Erreur lors de la suppression des données de département:", error);
    throw new Error("Erreur lors de la suppression des données de département");
  }
};

module.exports = {
  getDepartmentData,
  getDepartmentDataById,
  createDepartmentData,
  updateDepartmentData,
  deleteDepartmentData,
};
