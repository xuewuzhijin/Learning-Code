const http = require('http');

http.createServer( (request, response) => {
  // 头部信息
  console.log(request.headers);
  /**
  * {
  *   host: 'localhost:8080',
  *   connection: 'keep-alive',
  *   'content-length': '28175',
  *   'cache-control': 'max-age=0',
  *   origin: 'http://192.168.0.102:1111',
  *   'upgrade-insecure-requests': '1',
  *   'content-type':
  *   'multipart/form-data; boundary=----WebKitFormBoundary6iGciRktkpvcxqTC',
  *   'user-agent':
  *   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
  *   accept:
  *   'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,* /*;q=0.8,application/signed-exchange;v=b3',
  *   referer: 'http://192.168.0.102:1111/src/04-post-file.html',
  *   'accept-encoding': 'gzip, deflate, br',
  *   'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8'
  * }
  **/

  let arr = [];

  // POST DATA
  request.on( 'data', buffer => {
    arr.push(buffer);
  });

  // POST END
  request.on( 'end', () => {

    let buffer = Buffer.concat(arr);
    console.log(buffer.toString());
    /**
     * body 数据
     * ------WebKitFormBoundary6iGciRktkpvcxqTC
     * Content-Disposition: form-data; name="username"
     * 
     * 123456
     * ------WebKitFormBoundary6iGciRktkpvcxqTC
     * Content-Disposition: form-data; name="password"
     * 
     * 123456
     * ------WebKitFormBoundary6iGciRktkpvcxqTC
     * Content-Disposition: form-data; name="file"; filename="httpd.conf.temp"
     * Content-Type: application/octet-stream
     * ...balabala一堆文件信息就不传了
     * ------WebKitFormBoundary6iGciRktkpvcxqTC--
    **/
  })

}).listen(8080);