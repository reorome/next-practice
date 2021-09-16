const { QueryFile } = require('pg-promise');
const { join: joinPath } = require('path');

// Helper for linking to external query files:
function sql(file) {
  // const fullPath = joinPath(__dirname, file); // generating full path;
  const dir = process.cwd();
  return new QueryFile(dir + '/' + file, { minify: true });
}

module.exports = {
  // external queries for Users:
  items: {
    search: sql('db/sql/items/selectById.sql'),
  },
};
