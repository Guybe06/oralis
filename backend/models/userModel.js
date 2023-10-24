const {
  createData,
  deleteData,
  getData,
  getDataById,
  updateData,
} = require("./_model");

const Table = "users";

const getUsers = async () => {
  return await getData(Table);
};

const getUserById = async (id) => {
  return await getDataById(Table, id);
};

const createUser = async (user) => {
  return await createData(Table, user);
};

const updateUser = async (id, user) => {
  return await updateData(Table, user, id || 0);
};

const deleteUser = async (id) => {
  return await deleteData(Table, id);
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
