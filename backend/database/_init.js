const os = require('os');
const fse = require('fs-extra');
const sqlite3 = require("sqlite3");
const path = require("path");

// const dbPath = path.join(process.cwd(), 'backend', 'database', 'data', 'oralisStore.crypt.db');

const userHomeDir = os.homedir();
const hiddenDirPath = path.join(userHomeDir, '.oralisStore');

if (!fse.existsSync(hiddenDirPath)) {
  fse.mkdirSync(hiddenDirPath);
  fse.ensureDirSync(hiddenDirPath);
}

const dbPath = path.join(hiddenDirPath, 'oralisStore.crypt.db');

console.log(hiddenDirPath);

const initializeSQLite = () => {
  const db = new sqlite3.Database(dbPath);

  db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT DEFAULT NULL,
            password TEXT NOT NULL,
            role INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS transactiontypes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            category_id INTEGER,
            type_id INTEGER,
            amount NUMERIC(10, 2) NOT NULL,
            date DATE NOT NULL,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            transac_uuid TEXT DEFAULT (lower(hex(randomblob(4)))) 
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS reports (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            name TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS departments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            user_id INTEGER,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            color TEXT,
            user_id INTEGER,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            category_type INTEGER
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS cashflow (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            category_id INTEGER,
            type_id INTEGER,
            date DATE NOT NULL,
            amount NUMERIC(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
  });

  return db;
};

const from = (tableName) => {
  let whereClause = "";

  const select = (columns = "*") => {
    const builder = {
      equal: (column, value) => {
        whereClause = `WHERE ${column} = ${JSON.stringify(value)}`;
        return builder;
      },
      execute: async () => {
        return new Promise((resolve, reject) => {
          const query = `SELECT ${columns} FROM ${tableName} ${whereClause}`;
          initializeSQLite().all(query, (err, rows) => {
            if (err) {
              resolve({ data: [], error: err });
            } else {
              resolve({ data: rows, error: null });
            }
          });
          whereClause = "";
        });
      },
    };
    return builder;
  };

  const insert = async (values) => {
    return new Promise((resolve, reject) => {
      const columns = Object.keys(values).join(", ");
      const placeholders = Object.keys(values)
        .map(() => "?")
        .join(", ");
      const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;
      const params = Object.values(values);
      initializeSQLite().run(query, params, function (err) {
        if (err) {
          resolve({ lastID: null, changes: 0, error: err });
        } else {
          resolve({ lastID: this.lastID, changes: this.changes, error: null });
        }
      });
    });
  };

  const update = (values) => {
    let error = null;
    const updateBuilder = {
      equal: async (column, value) => {
        whereClause = `WHERE ${column} = ${JSON.stringify(value)}`;
        await executeUpdate(values);
        return { error };
      },
    };

    const executeUpdate = async (values) => {
      return new Promise((resolve, reject) => {
        const sets = Object.keys(values)
          .map((column) => `${column} = ?`)
          .join(", ");
        const query = `UPDATE ${tableName} SET ${sets} ${whereClause}`;
        const params = [...Object.values(values)];
        initializeSQLite().run(query, params, function (err) {
          if (err) {
            error = err;
            resolve({ changes: 0, error: err });
          } else {
            resolve({ changes: this.changes, error: null });
          }
        });
        whereClause = "";
      });
    };

    let whereClause = "";

    return updateBuilder;
  };

  const remove = () => {
    let error = null;

    const removeBuilder = {
      equal: async (column, value) => {
        whereClause = `WHERE ${column} = ${JSON.stringify(value)}`;
        await executeRemove();
        return { error };
      },
    };

    const executeRemove = async () => {
      return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${tableName} ${whereClause}`;
        initializeSQLite().run(query, (err) => {
          if (err) {
            error = err;
            resolve({ error: err });
          } else {
            resolve({ error: null });
          }
        });
        whereClause = "";
      });
    };

    let whereClause = "";

    return removeBuilder;
  };

  return { select, insert, update, remove };
};

const database = {
  from: from,
};

module.exports = { database };