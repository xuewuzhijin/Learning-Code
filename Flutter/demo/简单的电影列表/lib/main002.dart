import 'package:flutter/material.dart';

// /** 一个由图片组成的简单List页面 **/

void main() => runApp( MyApp() );

class MyApp extends StatelessWidget {
  @override
  Widget build( BuildContext context ) {
    return MaterialApp(
      title: 'Flutter 002',
      home: Scaffold(
        appBar: new AppBar(
          title: new Text( 'ListView Widget' )
        ),
        body: new ListView(
          children: <Widget>[
            // new ListTile(
            //   leading: new Icon( Icons.system_update ),
            //   title: new Text( 'system_update' )
            // ),
            // new ListTile(
            //   leading: new Icon( Icons.iso ),
            //   title: new Text( 'iso' )
            // ),
            // new ListTile(
            //   leading: new Icon( Icons.android ),
            //   title: new Text( 'android' )
            // ),
            new Image.network('http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg'),
            new Image.network('http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg'),
            new Image.network('http://a2.att.hudong.com/08/72/01300000165476121273722687045.jpg'),
            new Image.network('http://a0.att.hudong.com/78/52/01200000123847134434529793168.jpg'),
          ]
        ),
      ),
    );
  }
}