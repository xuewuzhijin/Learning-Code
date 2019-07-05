const ws = require('socket.io');
const http = require('http');

let server = http.createServer( (request, response) => {}).listen(8080);
/**
 * 1. WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。
 * 在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
 * 2. 使用WebSocket 可以实现跨域连接，即，哪怕客户端是通过file（非HTTP/S）协议打开的html都可以进行连接
 * 3. 比起传统的Ajax轮询方式，HTML5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。
 *    轮询：指浏览器可能每隔一秒或几秒轮番发出HTTP请求服务器获取最新信息，但每次发送的信息头（request Header）有可能体积比较大
 *    比如定义的cookie信息等每次都会上传到服务器，但显然服务器用不上这些数据，所以势必很多的带宽资源浪费
 */
// WebSocket
let wServer = ws.listen(server);

wServer.on( 'connection', sock => {
  // sock.emit('客户端名称', '数据' );
  // sock.on('name', function(){});

  // 监听客户端发来的test数据 -> 05-websocket-1.html
  sock.on('test', function (a, b) {
    console.log(a + b);
  })

  // 向客户端发送一个test1数据
  setInterval(() => {
    sock.emit('test1', new Date())
  }, 1000);
})