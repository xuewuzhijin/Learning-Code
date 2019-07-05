const http = require('http');
const fs = require('fs');
let server = http.createServer((request, respones) => {

  /**
  * 这里阅读当前 src 下的 请求的url，后面是该函数的回调函数
  * 这里需要注意的是，我当前在example下启动的 node http.js 所以以该路径为根目录
  */
  fs.readFile(`src${request.url}`, (error, buffer) => {

    if (error) { //  阅读失败

      // 返回404  ->  给浏览器
      respones.writeHeader(404);
      // 并输出以下内容  ->  给用户
      respones.write('Sorry, This Page It\'s Not Found');

    } else { //  阅读成功

      /**
       * 响应请求，并返回缓冲区数据
       * 阅读到的数据是十六进制数据，如果需要debug，执行这句
       *   > buffer.ToString()
       */
      respones.write(buffer)
    }

    // 执行成功后断开连接，否则浏览器误认为还有数据，将会继续等待
    respones.end();

  })

})

server.listen(8080);
