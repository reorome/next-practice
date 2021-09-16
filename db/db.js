// const pgp = require("pg-promise")

const cn = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  max: 30, // use up to 30 connections
  // "types" - in case you want to set custom type parsers on the pool level
};

const pgp = require('pg-promise')();

const db = pgp(cn);

const sqlFile = (fullPath) => {
  return new pgp.QueryFile(fullPath, { minify: true });
};

module.exports = {
  pgp: db,
  sqlFile: sqlFile,
};
