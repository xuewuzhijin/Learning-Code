const http = require('http');
const querystring = require('querystring');

let server = http.createServer((request, respones) => {
  /* 由于很多时候POST数据是把整个数据分块进行上传的，所以服务器端避免出现数据错误，
     需要对整体数据进行合并 */
  let arr = [];

  // POST接收数据
  request.on('data', buffer => {

    console.log(buffer);
    // <Buffer 75 73 65 72 6e 61 6d 65 3d 31 32 33 34 35 36 26 70 61 73 73 77 6f 72 64 3d 31 32 33 34 35 36>
    arr.push(buffer);

  });


  // POST完成接收
  request.on('end', () => {

    let buffer = Buffer.concat(arr);
    console.log(buffer);
    // <Buffer 75 73 65 72 6e 61 6d 65 3d 31 32 33 34 35 36 26 70 61 73 73 77 6f 72 64 3d 31 32 33 34 35 36>

    // 这里使用toString仅为测试，生产环节因应避免这种情况，否则可能会导致文件类对数据被转换成字符串
    console.log(buffer.toString());
    // username=123456&password=123456

    console.log(querystring.parse(buffer.toString()));
    // [Object: null prototype] { username: '123456', password: '123456' }
  });
});

server.listen(8080);