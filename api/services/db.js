require('dotenv').config();
const cfg = require('./config');
const Pool = require('pg').Pool;

const pool = new Pool({
  user: cfg.getValue('user', 'postgres'),
  password: cfg.getValue('password', 'admin'),
  host: cfg.getValue('host', 'localhost'),
  port: cfg.getValue('port', '5432'),
  database: cfg.getValue('database', 'course'),
});

module.exports = pool;