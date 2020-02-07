import 'package:flutter/material.dart';

// /** 一些基础样式设置 **/

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter 001',
      home: Scaffold(
        appBar: AppBar(
          title: Text('头部标题'),
        ),
        body: Center(
            /** 第一部分注释
            child: Text(
              'Hello World! nice to meet you. the application it\'s my first app, so you understand?',
              textAlign: TextAlign.justify,                  //  文字对齐方式
              maxLines: 2,                                   //  最大行数
              overflow: TextOverflow.ellipsis,               //  溢出省略号
              style: TextStyle(
                fontSize: 25.0,                              //  字体大小
                color: Color.fromARGB(255, 255, 150, 150),   //  字体颜色
                decoration: TextDecoration.underline,        //  装饰 -> 下划线
                decorationStyle: TextDecorationStyle.dashed  //  下划线样式 -> 虚线
              ),
            ),
            **/
            /** 第二部分注释
            child: Container(
              child: new Text(
                '中间内容，更新一下内容',
                style: TextStyle(
                  fontSize: 40.0,
                  color: Colors.white,                          //  字体颜色
                ),
              ),
              alignment: Alignment.topLeft,                     //  容器位置
              width: 400.0,                                     //  容器宽高度
              height: 500.0,
              // color: Colors.orangeAccent,                    //  容器背景颜色
              // padding: const EdgeInsets.all(20.0),           //  容器内边距，all 表示左上右下全部都是20.0的内边距
              padding: const EdgeInsets.fromLTRB(20.0, 10.0, 0, 0),   //  表示左上右下边距的值
              margin: const EdgeInsets.all(15.0),               //  容器的外边距
              decoration: new BoxDecoration(
                gradient: const LinearGradient(                 //  容器背景颜色渐变，必须要把上面的color注释掉，否则报错
                  colors: [
                    Colors.blue,
                    Colors.greenAccent,
                    Colors.orange
                  ]
                )
              ),
        ),
        */
        child: Container(
          child: new Image.network(
            'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg',
            scale: 2.0,
            color: Colors.blue,                                   //    给图片加个颜色
            colorBlendMode: BlendMode.colorBurn,                  //    给图片加个混合模式，!!!需要跟上面的color搭配使用，类似于Ps中的混合模式
            // fit: BoxFit.fill,                                  //    填充满整个容器，图片会变形
            // fit: BoxFit.fitWidth,                              //    填充满宽度，如果高度超过将被裁切
            // fit: BoxFit.fitHeight,                             //    填充满高度，如果宽度超过将被裁切
            // fit: BoxFit.contain,                               //    要么高度填充满，要么宽度填充满
            // fit: BoxFit.cover,                                 //    高度、宽度填充满，高度、宽度其中之一会被裁切
            // fit: BoxFit.scaleDown,                             //    没什么效果
            repeat: ImageRepeat.repeatX,                          //    让图片横向平铺、repeatY（纵向平铺）、repeat（横、纵向平铺）、noRepeat（平铺禁用）
          ),
          width: 300.0,
          height: 200.0,
          color: Colors.lightBlue,
        ),
        ),
      ),
    );
  }
}
