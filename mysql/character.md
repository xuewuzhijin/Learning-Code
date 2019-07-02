# 字符集

    关于 MYSQL 中的字符集

```sql

    SHOW VARIABLES LIKE '%char%';

/*

+--------------------------+------------------------------------------------------+
| Variable_name            | Value                                                |
+--------------------------+------------------------------------------------------+
| character_set_client     | utf8mb4                                              |
| character_set_connection | utf8mb4                                              |
| character_set_database   | utf8mb4                                              |
| character_set_filesystem | binary                                               |
| character_set_results    | utf8mb4                                              |
| character_set_server     | utf8mb4                                              |
| character_set_system     | utf8                                                 |
| character_sets_dir       | /usr/local/Cellar/mysql/8.0.15/share/mysql/charsets/ |
+--------------------------+------------------------------------------------------+

*/
```

    1. character_set_client utf8mb4
    客户端使用的字符集

    2. character_set_connection utf8mb4
    链接数据库的字符集设置类型，如果程序没有指明连接数据库使用的字符集类型，则按照服务器的字符集设置

    3. character_set_database utf8
    数据库服务器中某个库使用的字符集设定，如果建库时没有指明，将使用服务器安装时指定的字符集设置

    4. character_set_filesystem binary
    把os上文件名转化成此字符集，即把 character_set_client 转换 character_set_filesystem， 默认binary是不做任何转换的

    5. character_set_results utf8mb4
    数据库给客户端返回时所用的字符集设定，如果没有指明，使用服务器默认的字符集

    6. character_set_server utf8mb4
    服务器安装时指定的默认字符集设定

    7. character_set_system utf8
    数据库系统使用的字符集设定

    character_sets_dir /usr/local/Cellar/mysql/8.0.15/share/mysql/charsets/

## 字符集占取的字节数

    英文字母：
    字节数：1; 编码：GB2312
    字节数：1; 编码：GBK
    字节数：1; 编码：GB18030
    字节数：1; 编码：ISO-8859-1(latin-1)
    字节数：1; 编码：UTF-8
    字节数：4; 编码：UTF-16
    字节数：2; 编码：UTF-16BE
    字节数：2; 编码：UTF-16LE

    中文汉字：
    字节数：2; 编码：GB2312
    字节数：2; 编码：GBK
    字节数：2; 编码：GB18030
    字节数：1; 编码：ISO-8859-1(latin-1)
    字节数：3; 编码：UTF-8
    字节数：4; 编码：UTF-16
    字节数：2; 编码：UTF-16BE
    字节数：2; 编码：UTF-16LE