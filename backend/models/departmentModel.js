const {
  createData,
  deleteData,
  getData,
  getDataById,
  updateData,
} = require("./_model");

const Table = "departments";

const getDepartments = async () => {
  return await getData(Table);
};

const getDepartmentById = async (id) => {
  return await getDataById(Table, id);
};

const createDepartment = async (department) => {
  return await createData(Table, department);
};

const updateDepartment = async (id, department) => {
  return await updateData(Table, department, id || 0);
};

const deleteDepartment = async (id) => {
  return await deleteData(Table, id);
};

module.exports = {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
