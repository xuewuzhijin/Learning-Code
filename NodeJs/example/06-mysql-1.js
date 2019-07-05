const http = require('http');
const mysql = require('mysql');

let db = mysql.createConnection({
  hsot: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node'
});

let dbs_user_20 = 'SELECT user, created_at, name, gender FROM users WHERE id <= 20';
let dbs_user_120 = 'SELECT user, name, gender FROM users WHERE id > 120';
let dbi_user = `INSERT INTO users (user, name, gender, email, password) VALUES('nodenode', 'bill', '1', 'bill@bill.com', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO')`
db.query(dbs_user_20, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    // dbs_user_20  ->  一维数组
    // dbs_user_120 ->  空数组
    // dbs_user     ->  对象
  }
})