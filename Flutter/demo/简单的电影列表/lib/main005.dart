import 'package:flutter/material.dart';

// /** 使用网格布局制作一个简单的电影列表结构 **/

void main() => runApp( MyApp() );

class MyApp extends StatelessWidget {
  @override
  Widget build( BuildContext context ) {
    return MaterialApp(
      title: '电影海报App',
      home: Scaffold(
        appBar: new AppBar(
          title: new Text( '电影列表' ),
        ),
        body: GridView.count(
          padding: const EdgeInsets.all(10.0),
          crossAxisCount: 3,
          crossAxisSpacing: 10.0,
          children: <Widget>[
            const Text( '1' ),
            const Text( '2' ),
            const Text( '3' ),
            const Text( '4' ),
            const Text( '5' ),
            const Text( '6' ),
          ],
        ),
      ),
    );
  }
}