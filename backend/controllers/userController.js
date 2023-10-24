const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../models/userModel");

const getUserData = async () => {
  try {
    return await getUsers();
  } catch (error) {
    console.error("Erreur lors de la récupération des données d'utilisateur:", error);
    throw new Error("Erreur lors de la récupération des données d'utilisateur");
  }
};

const getUserDataById = async (id) => {
  try {
    return await getUserById(id);
  } catch (error) {
    console.error("Erreur lors de la récupération des données d'utilisateur par ID:", error);
    throw new Error("Erreur lors de la récupération des données d'utilisateur par ID");
  }
};

const createUserData = async (data) => {
  try {
    const newUser = data;
    return await createUser(newUser);
  } catch (error) {
    console.error("Erreur lors de la création des données d'utilisateur:", error);
    throw new Error("Erreur lors de la création des données d'utilisateur");
  }
};

const updateUserData = async (id, data) => {
  try {
    const updatedUser = data;
    return await updateUser(id, updatedUser);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données d'utilisateur:", error);
    throw new Error("Erreur lors de la mise à jour des données d'utilisateur");
  }
};

const deleteUserData = async (id) => {
  try {
    return await deleteUser(id);
  } catch (error) {
    console.error("Erreur lors de la suppression des données d'utilisateur:", error);
    throw new Error("Erreur lors de la suppression des données d'utilisateur");
  }
};

module.exports = {
  getUserData,
  getUserDataById,
  createUserData,
  updateUserData,
  deleteUserData,
};
