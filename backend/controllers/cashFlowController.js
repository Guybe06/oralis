const {
  getCashFlow,
  getCashFlowById,
  createCashFlow,
  updateCashFlow,
  deleteCashFlow,
} = require("../models/cashFlowModel");

const getCashFlowData = async () => {
  try {
    return await getCashFlow();
  } catch (error) {
    console.error("Error while fetching cash flow data:", error);
    throw new Error("Error while fetching cash flow data");
  }
};

const getCashFlowDataById = async (id) => {
  try {
    return await getCashFlowById(id);
  } catch (error) {
    console.error("Error while fetching cash flow data by ID:", error);
    throw new Error("Error while fetching cash flow data by ID");
  }
};

const createCashFlowData = async (data) => {
  try {
    const newCashFlow = data;
    return await createCashFlow(newCashFlow);
  } catch (error) {
    console.error("Error while creating cash flow data:", error);
    throw new Error("Error while creating cash flow data");
  }
};

const updateCashFlowData = async (id, data) => {
  try {
    const updatedCashFlow = data;
    return await updateCashFlow(id, updatedCashFlow);
  } catch (error) {
    console.error("Error while updating cash flow data:", error);
    throw new Error("Error while updating cash flow data");
  }
};

const deleteCashFlowData = async (id) => {
  try {
    return await deleteCashFlow(id);
  } catch (error) {
    console.error("Error while deleting cash flow data:", error);
    throw new Error("Error while deleting cash flow data");
  }
};

module.exports = {
  getCashFlowData,
  getCashFlowDataById,
  createCashFlowData,
  updateCashFlowData,
  deleteCashFlowData,
};
