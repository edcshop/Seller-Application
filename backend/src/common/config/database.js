const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'seller',
  prefix: '',
  encoding: 'utf8mb4',
  host: '192.168.31.151',
  port: '3306',
  user: 'root',
  password: 'denglw381',
  dateStrings: true
};
