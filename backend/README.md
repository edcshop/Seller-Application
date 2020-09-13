# Backend

### develop env configure
+  create database seller , import collection.sql from backend directory
```
CREATE SCHEMA `nideshop` DEFAULT CHARACTER SET utf8mb4 ;
```
> set db encode utf8mb4 
+ change the configure of database
  src/common/config/database.js
  
```
const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'seller',
    prefix: '',
    encoding: 'utf8mb4',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'your password',
    dateStrings: true
};
```

+ Install dependencies and start 
```
npm install
npm start
```
visit http://127.0.0.1:8360/

