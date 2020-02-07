import 'package:flutter/material.dart';

// /** 自定义组件：一个由颜色组成的简单List页面 **/

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter 003',
      home: Scaffold(
        appBar: new AppBar(title: new Text('ListView Widget')),
        body: Center(
          child: Container(
            height: 200.0,
            child: MyList(),
          ),
        ),
      ),
    );
  }
}

// 自定义一个 List 组件
class MyList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new ListView(
      scrollDirection: Axis.horizontal,                   //    横向水平滚动
      // scrollDirection: Axis.vertical,                  //    纵向垂直滚动
      children: <Widget>[
        new Container(
          width: 180.0,
          color: Colors.greenAccent,
        ),
        new Container(width: 180.0, color: Colors.blueAccent),
        new Container(
          width: 180.0,
          color: Colors.purpleAccent,
        ),
        new Container(
          width: 180.0,
          color: Colors.orangeAccent,
        ),
        new Container(
          width: 180.0,
          color: Colors.redAccent,
        ),
        new Container(
          width: 180.0,
          color: Colors.black,
        ),
        new Container(
          width: 180.0,
          color: Colors.yellowAccent,
        ),
      ],
    );
  }
}
