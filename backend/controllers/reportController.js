const {
  getReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
} = require("../models/reportModel");

const getReportData = async () => {
  try {
    return await getReports();
  } catch (error) {
    console.error("Erreur lors de la récupération des données de rapport:", error);
    throw new Error("Erreur lors de la récupération des données de rapport");
  }
};

const getReportDataById = async (id) => {
  try {
    return await getReportById(id);
  } catch (error) {
    console.error("Erreur lors de la récupération des données de rapport par ID:", error);
    throw new Error("Erreur lors de la récupération des données de rapport par ID");
  }
};

const createReportData = async (data) => {
  try {
    const newReport = data;
    return await createReport(newReport);
  } catch (error) {
    console.error("Erreur lors de la création des données de rapport:", error);
    throw new Error("Erreur lors de la création des données de rapport");
  }
};

const updateReportData = async (id, data) => {
  try {
    const updatedReport = data;
    return await updateReport(id, updatedReport);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données de rapport:", error);
    throw new Error("Erreur lors de la mise à jour des données de rapport");
  }
};

const deleteReportData = async (id) => {
  try {
    return await deleteReport(id);
  } catch (error) {
    console.error("Erreur lors de la suppression des données de rapport:", error);
    throw new Error("Erreur lors de la suppression des données de rapport");
  }
};

module.exports = {
  getReportData,
  getReportDataById,
  createReportData,
  updateReportData,
  deleteReportData,
};
