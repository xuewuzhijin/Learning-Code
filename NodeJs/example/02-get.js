const http = require('http');
const querystring = require('querystring');

const url = require('url');
let server = http.createServer((request, respones) => {

  // 请求类型
  console.log(request.method);
  // GET

  console.log(request.url);
  // /?username=123456&password=123456

  console.log(querystring.parse(request.url));
  // [Object: null prototype] { '/?username': '123456', password: '123456' }

  console.log(querystring.parse(request.url.split('?')));
  // [Object: null prototype] {}

  console.log(url.parse(request.url));
  /**
   * Url {
   *   protocol: null,
   *   slashes: null,
   *   auth: null,
   *   host: null,
   *   port: null,
   *   hostname: null,
   *   hash: null,
   *   search: '?username=123456&password=123456',
   *   query: 'username=123456&password=123456',
   *   pathname: '/',
   *   path: '/?username=123456&password=123456',
   *   href: '/?username=123456&password=123456'
   * }
   */


  console.log(url.parse(request.url, true));
  /**
   * Url {
   *   protocol: null,
   *   slashes: null,
   *   auth: null,
   *   host: null,
   *   port: null,
   *   hostname: null,
   *   hash: null,
   *   search: '?username=123456&password=123456',
   *   query:
   *    [Object: null prototype] { username: '123456', password: '123456' },
   *   pathname: '/',
   *   path: '/?username=123456&password=123456',
   *   href: '/?username=123456&password=123456'
   * }
   */
  const { query, pathname } = url.parse(request.url, true);
  console.log(query, pathname);
  // { username: '123456', password: '123456' }
  // /
})

server.listen(8080);
