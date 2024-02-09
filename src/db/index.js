const { Pool } = require('pg');
const dotenv = requirw("dotenv");

dotenv.config();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    rejecUnauthorization: false,
  },
});

modulo.exports = db;