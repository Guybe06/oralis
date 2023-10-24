const { database } = require("../database/_init");

const getData = async (table) => {
  try {
    const { data, error } = await database.from(table).select().execute();

    if (error) {
      throw error;
    }
    return data || [];
  } catch (error) {
    console.error("Error while fetching data:", error);
    return [];
  }
};

const getDataById = async (table, id) => {
  try {
    const { data, error } = await database.from(table).select().equal('id', id).execute();

    if (error) {
      throw error;
    }
    return data || {};
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {};
  }
};

const createData = async (table, data) => {
  try {
    const { error } = await database.from(table).insert(data);
    if (error) {
      throw error;
    }
    return true;
  } catch (error) {
    console.error("Error while inserting data:", error);
    return false;
  }
};

const updateData = async (table, data, id) => {
  try {
    const { error } = await database.from(table).update(data).equal("id", id);
    if (error) {
      throw error;
    }
    return true;
  } catch (error) {
    console.error("Error while updating data:", error);
    return false;
  }
};

const deleteData = async (table, id) => {
  try {
    const { error } = await database.from(table).remove().equal("id", id);
    if (error) {
      throw error;
    }
    return true;
  } catch (error) {
    console.error("Error while deleting data:", error);
    return false;
  }
};

module.exports = {getData, createData, updateData, deleteData, getDataById };
