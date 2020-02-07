import 'package:flutter/material.dart';

void main() => runApp( MyApp() );

class MyApp extends StatelessWidget {
  @override
  Widget build( BuildContext context ) {
    return MaterialApp(
      title: '电影海报App',
      home: Scaffold(
        appBar: new AppBar(
          title: new Text( '电影列表' ),
          backgroundColor: Colors.black54,
        ),
        body: GridView(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,                    //    网格横向个数
            crossAxisSpacing: 2.0,                //    横向边距
            mainAxisSpacing: 2.0,                 //    纵向边距
            childAspectRatio: 0.7,                //    网格比例
          ),
          children: <Widget>[
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200r7lrqxw_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200i3gpva4_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200i6aejvn_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/4/48pcff4vgkx11kh_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200c2a4kve_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200kl0dp52_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc002003gzmdt0_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/0/0jn299kfkbl5vwq_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200lbzfo54_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/i/ifggdul2vkci5ni_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200hmv27ue_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200zq9atqu_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc002007sl01sg_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200pqtcb9u_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/w/w6unuv58t8df6gs_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/p/pttuqywq2rxe7er_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/r/rj8uc45tm8a17wm_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200y6souzq_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/7/714pdmcrnqdlmdx_p.jpg', fit: BoxFit.cover),
            new Image.network('https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/m/mzc00200bq925ky_p.jpg', fit: BoxFit.cover),
          ],
        )
      )
    );
  }
}