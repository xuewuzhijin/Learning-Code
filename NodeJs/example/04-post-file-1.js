const http = require('http');

/**
 * 插件包，需安装 npm/cnpm i multiparty
 * https://www.npmjs.com/package/multiparty
 */
const multiparty = require('multiparty');

http.createServer( (request, response) => {

  // 1. 实列化该插件并设置参数，这里注意，要.Form
  let form = new multiparty.Form({
    uploadDir: './uploads'
  });

  // 2. 解析请求参数
  form.parse(request);

  // 3. 字段的回调
  form.on('field', ( name, value ) => {
    console.log(`表单名：${name}, 表单值：${value}`);
  })

  // 3.1 文件的回调
  form.on('file', (filename, file) => {
    console.log(`文件名：${filename}，文件： ${file}`);
  })

  // 3.2 解析表单后关闭
  form.on('close', () => {
    console.log('搞定完事！');
  })

  // 表单名：username, 表单值：123456
  // 表单名：password, 表单值：123456
  // 文件名：file，文件： [object Object]
  // 搞定完事！




  // POST DATA
  request.on( 'data', buffer => {

  });

  // POST END
  request.on( 'end', () => {

  })

}).listen(8080);