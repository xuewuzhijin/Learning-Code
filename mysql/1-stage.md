通过使用 TERMINAL 来登录 MYSQL

### 登陆MQLSQL

    方式一：通过 MYSQL 自带的客户端，只限于 root 用户

    方式二：通过 WINDOWS/MAC 自带的客户端 -> TERMINAL

```bash
    #   登陆：mysql [-h主机名] [-P 端口号] -u 用户名 -p 密码
    mysql -h 192.168.1.1 -P 3306 -u root -p root
    #   或者：
    mysql -uroot -p
    #   -u 后面可以加空格和不加空格
    #   -p 后面可以加密码和不加密码，但是一般加密码的话容易导致密码被上翻到，也就是之前输入的命令通过键盘的上键头能够翻到历史记录，所以不加最好
    #   -P 大写P是端口号， -p 小写p 是密码
```

### 退出MYSQL

```bash
    exit;
    # OR
    # Ctrl + C
```

### MYSQL的常用命令

```bash
    #   1. 查看当前所有的数据库
    SHOW DATABASES;

    #   2. 打开制定的库
    USE [库的名称];

    #   3. 查看当前库的所有表
    SHOW TABLES;

    #   4. 查看其它库的所有表
    SHOW TABLES FROM [库的名称]

    #   5. 创建表
    CREATE TABLE [表明](
        # 列名 列类型，
        # 列名 列类型，
        # ...
    );

    #   6. 查看表结构
    DESC [表名];

    #   7. 查看服务器的版本
        #   方式一：已经登陆到mysql服务端的
        SELECT VERSION();
        #   方式二：没有登陆服务端的
        mysql --version
        #   或
        mysql --V
```

### MYSQL的语法规范

    1. 不区分大小写
        建议： 关键字大写，表名/列名小写
    2. 每条命令最好用分毫结尾
    3. 每条命令根据需要可以进行缩进或换行
    4. 注释
        单行注释： # 注释文字
        单行注释： -- 注释文字
        多行注释： /* 注释文字 */