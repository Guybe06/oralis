const {
  createData,
  deleteData,
  getData,
  getDataById,
  updateData,
} = require("./_model");

const Table = "categories";

const getCategories = async () => {
  return await getData(Table);
};

const getCategoryById = async (id) => {
  return await getDataById(Table, id);
};

const createCategory = async (category) => {
  return await createData(Table, category);
};

const updateCategory = async (id, category) => {
  return await updateData(Table, category, id || 0);
};

const deleteCategory = async (id) => {
  return await deleteData(Table, id);
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
