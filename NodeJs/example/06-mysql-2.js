const http = require('http');
const mysql = require('mysql');
const url = require('url');
const fs = require('fs');

let db = mysql.createConnection({
  hsot: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node'
});

http.createServer((request, response) => {
  response.setHeader('access-control-allow-origin', '*');
  const { pathname, query } = url.parse(request.url, true);
  console.log(`pathname: ${pathname}`);
  console.log(query);
  if( pathname == '/register' ) // 注册
  {

    if( query['username'] == '' )
      _resError.call(response, '用户名不能为空')
    if( query['username'].length > 32 )
      _resError.call(response, '用户名长度不能大于32位')

    // 查询用户名是否存在

    db.query(`SELECT user FROM users WHERE user = ${query['username']}`, (err, data) => {
      console.log(data);
      if(err){
        console.log(err)
      } else if ( data.length == 0 ) {

        db.query(`INSERT INTO users (user, name, gender, email, password) VALUES ('${query['username']}', 'register', 0, 'register@${query['username']}.com', '${query['password']}')`, (err, data) => {
          if( err ) {  
            console.log(err)
          } else {
            _resError.call(response, '注册成功')
          }
        })

      } else {
        _resError.call(response, '该用户名已存在')
      }
    })


  } else if ( pathname == '/login' ) // 登录
  {

    if( query['username'] == '' )
      _resError.call(response, '用户名不能为空')
    if( query['username'].length > 32 )
      _resError.call(response, '用户名长度不能大于32位')

    // 查询用户名是否存在
    db.query(`SELECT user FROM users WHERE user = ${query['username']}`, (err, data) => {
      if( err ) {
        console.log(err)
      } else if ( data.length ) {
        _resError.call(response, '该用户名不存在')
      } else if ( query['username'] == data['user'] && query[0]['password'] == data[0]['password']) {
        response.write('登录成功')
      }
    })

  } else {  // 其它路径

    fs.readFile('src' + pathname, ( err, buffer ) => {
      if( err )
      {
        response.writeHeader(404);
        response.write('Page Not Found');
        response.end();
      } else {
        response.write(buffer);
        response.end();
      }
    })

  }
}).listen(8080);

function _resError(msg) {
  // console.log(this);
  // console.log('msg', msg);
  this.writeHeader(200);
  this.write(msg);
  this.end();
}