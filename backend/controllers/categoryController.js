const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../models/categoryModel");

const getCategoryData = async () => {
  try {
    return await getCategories();
  } catch (error) {
    console.error("Erreur lors de la récupération des données de catégorie:", error);
    throw new Error("Erreur lors de la récupération des données de catégorie");
  }
};

const getCategoryDataById = async (id) => {
  try {
    return await getCategoryById(id);
  } catch (error) {
    console.error("Erreur lors de la récupération des données de catégorie par ID:", error);
    throw new Error("Erreur lors de la récupération des données de catégorie par ID");
  }
};

const createCategoryData = async (data) => {
  try {
    const newCategory = data;
    return await createCategory(newCategory);
  } catch (error) {
    console.error("Erreur lors de la création des données de catégorie:", error);
    throw new Error("Erreur lors de la création des données de catégorie");
  }
};

const updateCategoryData = async (id, data) => {
  try {
    const updatedCategory = data;
    return await updateCategory(id, updatedCategory);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données de catégorie:", error);
    throw new Error("Erreur lors de la mise à jour des données de catégorie");
  }
};

const deleteCategoryData = async (id) => {
  try {
    return await deleteCategory(id);
  } catch (error) {
    console.error("Erreur lors de la suppression des données de catégorie:", error);
    throw new Error("Erreur lors de la suppression des données de catégorie");
  }
};

module.exports = {
  getCategoryData,
  getCategoryDataById,
  createCategoryData,
  updateCategoryData,
  deleteCategoryData,
};
