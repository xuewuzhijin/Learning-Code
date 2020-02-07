import 'package:flutter/material.dart';

// /** 动态列表：使用自动生成的数据生成一个动态列表 **/

void main() => runApp(MyApp(
  items: new List<String>.generate(100, (i) => "Item $i")
));

class MyApp extends StatelessWidget {

  final List<String> items;                         //  申明变量
  // 构造方法
  MyApp({ Key key, @required this.items }): super( key: key );

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter 003',
      home: Scaffold(
        appBar: new AppBar(title: new Text('ListView Widget')),
        body: new ListView.builder(                 //  动态列表
          itemCount: items.length,
          itemBuilder: ( context, index ){
            return new ListTile(
              title: new Text( '${items[index]}' )
            );
          },
        ),
      ),
    );
  }
}
