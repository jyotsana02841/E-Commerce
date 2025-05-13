// backend/database/db.js
require('dotenv').config({ path: '.env.local' }); // **Add this line at the top**
const { Pool } = require("pg");
const url = require('url');

const dbUrl = new URL(process.env.DATABASE_URL);
const user = dbUrl.username;
const password = dbUrl.password;
const host = dbUrl.hostname;
const port = dbUrl.port;
const database = dbUrl.pathname.substring(1);

const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: String(password),
  port: port,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

module.exports = pool;