// 原始服务器，可以接受任何种类连接，缺点就是，全部信息都需要自己来写，并且要对应客户端种类的信息体
const net = require('net');

let server = net.createServer(sock => {
  console.log("有人来了");
  sock.once('data', buffer => {
    let result = filterHeader(buffer.toString());
    console.log("result: ", result.toString());
    if ('[object Object]' != result.toString()) {
      // 表示当前版本是 HTTP/1.1 , 返回 101 表示已经切换为 websocket 
      sock.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${result}\r\n\r\n`);
    } else {
      console.log(obj.msg);
    }
    /**
     * GET / HTTP/1.1
     * Host: localhost:8080
     * Connection: Upgrade
     * Pragma: no-cache
     * Cache-Control: no-cache
     * Upgrade: websocket                             //请求升级websocket连接
     * Origin: http://192.168.0.102:1111
     * Sec-WebSocket-Version: 13                      //websocket版本
     * User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
     * Accept-Encoding: gzip, deflate, br
     * Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
     * Cookie: io=rjrqdLnnLfTG-u2jAAAD
     * Sec-WebSocket-Key: kswwkv+1f1qvywsHhWbGQA==    //websocket传递的key以此验证是否支持websocket
     * Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits   //websocket扩展信息
     */
  })

  sock.on('data', buffer => {
    // 十六进制的buffer，需要自己解析信息。
    console.log(buffer);
  })

  sock.on('end', () => {
    console.log("连接断开了");
  })
}).listen(8080);

/**
 * 1. 把头部信息切割成对象形式
 * @param { String } string 头部信息体
 * @return {String | Object}
 */
function filterHeader(string) {
  // \r -> 回到行首
  // \n -> 新的一行
  // 这里头部信息中因为会多几行空的没值，所以需要过滤空的行
  let temp = string.split('\r\n').filter(empty => empty);
  console.log(temp);
  /**
   * [ 'GET / HTTP/1.1',
   * 'Host: localhost:8080',
   * 'Connection: Upgrade',
   * 'Pragma: no-cache',
   * 'Cache-Control: no-cache',
   * 'Upgrade: websocket',
   * 'Origin: http://192.168.0.102:1111',
   * 'Sec-WebSocket-Version: 13',
   * 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
   * 'Accept-Encoding: gzip, deflate, br',
   * 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8',
   * 'Cookie: io=rjrqdLnnLfTG-u2jAAAD',
   * 'Sec-WebSocket-Key: kKto675MqjkZBEMJn1K8zA==',
   * 'Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits' ]
   */
  temp.shift(); //  删除第一个 GET
  let obj = {};
  temp.forEach(r => {
    // 这里冒号后面有空格，避免出现有些域名有端口的情况导致数据切割不对称
    let arr = r.split(': ');
    obj[arr[0].toLowerCase()] = arr[1];
  })
  console.log(obj);

  // 执行加密
  return cryptoFn(obj);
  /**
   * { host: 'localhost:8080',
   *  connection: 'Upgrade',
   *  pragma: 'no-cache',
   *  'cache-control': 'no-cache',
   *  upgrade: 'websocket',
   *  origin: 'http://192.168.0.102:1111',
   *  'sec-websocket-version': '13',
   *  'user-agent':
   *  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
   *  'accept-encoding': 'gzip, deflate, br',
   *  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
   *  cookie: 'io=rjrqdLnnLfTG-u2jAAAD',
   *  'sec-websocket-key': 'WBcmUqMQUq9Z/7D8BFP8MQ==',
   *  'sec-websocket-extensions': 'permessage-deflate; client_max_window_bits' }
   */

}

const crypto = require("crypto");
/**
 * 1. Connection 必须设置 Upgrade，表示客户端希望连接升级。
 * 2. Upgrade 字段必须设置 Websocket，表示希望升级到 Websocket 协议。
 * 3. Sec-WebSocket-Key 是随机的字符串，服务器端会用这些数据来构造出一个 SHA-1 的信息摘要。把 “Sec-WebSocket-Key” 加上一个特殊字符串 “258EAFA5-E914-47DA-95CA-C5AB0DC85B11”，然后计算 SHA-1 摘要，之后进行 BASE-64 编码，将结果做为 “Sec-WebSocket-Accept” 头的值，返回给客户端。如此操作，可以尽量避免普通 HTTP 请求被误认为 Websocket 协议。
 * 4. Sec-WebSocket-Version 表示支持的 Websocket 版本。RFC6455 要求使用的版本是 13，之前草案的版本*均应当弃用。
 * 5. Origin 字段是可选的，通常用来表示在浏览器中发起此 Websocket 连接所在的页面，类似于 Referer。但是，与 Referer 不同的是，Origin 只包含了协议和主机名称。
 * 6. 其他一些定义在 HTTP 协议中的字段，如 Cookie 等，也可以在 Websocket 中使用。
 * @param { Object } obj 请求头转换成的对象形式数据
 * @returns {String | Object}
 */
function cryptoFn(obj) {
  if (obj.upgrade != 'websocket') {
    return {
      state: 0,
      msg: '不包含Upgrade字段信息'
    }
  } else if (obj['sec-websocket-version'] != '13') {
    return {
      state: 0,
      msg: '版本信息不对'
    }
  }
  let uuid = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    key = obj['sec-websocket-key'];
  return crypto.createHash('sha1').update(key + uuid).digest('base64');
}