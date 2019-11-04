# MYSQL 的常见函数

    概念：
    将一组逻辑语句封装在方法中，对外暴露方法名

    优势：
    1. 隐藏了实现细节
    2. 提高代码的重用性

    调用：
    SELECT 函数名( 实参列表 ) [ FROM 表名 ]

    了解：
    1. 函数名称
    2. 函数功能

## 分类目录

* [单行函数](#LENGTH)

    + [字符函数：](#LENGTH)
        - (1) [LENGTH](#LENGTH)
        - (2) [CONCAT](#CONCAT)
        - (3) [UPPER-LOWER](#UPPER-LOWER)
        - (4) [MID-SUBSTR-SUBSTRING](#MID-SUBSTR-SUBSTRING)
        - (5) [LEFT-RIGHT](#LEFT-RIGHT)
        - (6) [INSTR](#INSTR)
        - (7) [LTRIM-TRIM-RTRIM](#LTRIM-TRIM-RTRIM)
        - (8) [LPAD-RPAD](#LPAD-RPAD)
        - (9) [REPLACE](#REPLACE)
        - (10) [练习题](#练习题)
        - (11) IFNULL

    + [数学函数：](https://www.github.com/xuewuzhijin/mysql/blob/master/5-1-function.md#ROUND)
        - (1) ROUND
        - (2) CEIL
        - (3) FLOOR
        - (4) TRUNCATE
        - (5) MOD

    + [日期函数：](https://www.github.com/xuewuzhijin/mysql/blob/master/5-1-function.md#日期函数)
        - (1) NOW
        - (2) CURDATE
        - (3) CURTIME
        - (4) YEAR
        - (5) MONTH
        - (6) MONTHNAME
        - (7) DAY
        - (8) HOUR
        - (9) MINUTE
        - (10) SECOND
        - (11) STR_TO_DATE
        - (12) DATE_FORMAT

    + [流程控制函数：](https://www.github.com/xuewuzhijin/mysql/blob/master/5-2-function.md#流程控制函数)
        - (1) IF
        - (2) CASE

    + [其它函数：](https://www.github.com/xuewuzhijin/mysql/blob/master/5-2-function.md#其它函数)
        - (1) VERSION
        - (2) DATABASE
        - (3) USER

* [分组函数](https://www.github.com/xuewuzhijin/mysql/blob/master/5-3-function.md)

---

### LENGTH

    获取参数值的字节个数

    格式：
    LENGTH(str)

```sql
SELECT LENGTH('学无止境XOBJECT')；
-- 19
SELECT LENGTH('XOBJECT')；
-- 7

-- utf8 字符集 一个字母占 1 个字节 一个汉字占 3 个字节
-- gbk 字符集 一个字母占 1 个字节 一个汉字占 2 个字节

-- 通过使用命令来查看当前客户端使用的是什么字符集
SHOW VARIABLES LIKE '%char%'
```

> 关于字符集占字节数点击这里传送[字符集](https://github.com/xuewuzhijin/mysql/blob/master/character.md)

### CONCAT

    拼接字符串

    格式：
    CONCAT(str1,str2,...)

```sql
SELECT CONCAT(id,parent_id) as 拼接 FROM district;
```

### UPPER-LOWER

    UPPER 转大写 LOWER 转小写

    格式：
    UPPER(str)
    LOWER(str)

```sql
SELECT UPPER('name');
-- NAME
SELECT LOWER('NAME');
-- name
```

### MID-SUBSTR-SUBSTRING

    截取字符串

    格式：
    MID(str,pos, len)
    SUBSTR(str,pos, len)
    SUBSTRING(str,pos, len)

    注意：
    1. pos 可以是负值， len 不能为负值
    2. 与其它语言不同的是，MYSQL 索引从 1 开始

```sql

SELECT SUBSTRING('少年强则中国强' FROM -3 FOR 3);
-- 等同于
SELECT SUBSTRING('少年强则中国强', -3, 3);

SELECT MID('少年强则中国强',5);
SELECT SUBSTR('少年强则中国强',5);
SELECT SUBSTRING('少年强则中国强',5);
-- 中国强

SELECT MID('少年强则中国强',1,3);
SELECT MID('少年强则中国强',1,3);
SELECT SUBSTR('少年强则中国强',1,3);
SELECT SUBSTRING('少年强则中国强',1,3);
-- 少年强
```

### LEFT-RIGHT

    获取 str 里面从 LEFT 到右 / RIGHT 到左的 len 个字符串

    格式：
    LEFT(str,len) RIGHT(str,len)

    注意：
    1. len 不能是负数

```sql
SELECT LEFT('少年强则中国强',3);
-- 少年强
SELECT RIGHT('少年强则中国强',3);
-- 中国强
```

### INSTR

    返回字符串第一次出现的索引，如果找不到返回0

    格式：
    INSTR(str,substr)

```sql
SELECT INSTR('少年强则中国强','少年强');
-- 1
SELECT INSTR('少年强则中国强少年强','少年强');
-- 1
SELECT INSTR('少年强则中国强','英法强');
-- 0
```

### LTRIM-TRIM-RTRIM

    清除'首尾' [ 空格 | remstr ]
    LTRIM(str) 清除左边空格
    RTRIM(str) 清除右边空格

    格式：
    TRIM([remstr FROM] str)

```sql
SELECT TRIM('   中 国 强       ');
-- 中 国 强
SELECT TRIM('牛' FROM '牛牛牛牛牛牛中国牛强牛牛牛牛');
-- 中国牛强
SELECT LTRIM('   中 国 强       ');
-- 中 国 强       
SELECT RTRIM('   中 国 强       ');
--    中 国 强
```

### LPAD-RPAD

    向左 或 向右 填充 len 个 padstr

    格式：
    LPAD(str,len,padstr) RPAD(str,len,padstr)

    注意：
    1. 如果 len 的位数小于 str 的长度，那么函数返回 str 从右删减到左直到与 len 相同位数的值

```sql
SELECT LPAD('你好',10,'*');
-- ********你好
SELECT LPAD('你好',1,'*');
-- 你
SELECT RPAD('你好',10,'*');
-- 你好********
SELECT RPAD('你好',1,'*');
-- 你
```

### REPLACE

    把 str 里面的 from_str 替换成 to_str

    格式：
    REPLACE(str,from_str,to_str)

```sql
SELECT REPLACE('少年强则少女扶墙','少女扶墙','中国强');
-- 少年强则中国强
SELECT REPLACE('少年强则少女扶墙少女扶墙少女扶墙少女扶墙','少女扶墙','中国强');
-- 少年强则中国强中国强中国强中国强
```

### 练习题

```sql
-- 让 pinyin 首字符大写，其它字符小写，中间用 _ 连接
SELECT CONCAT( UPPER( SUBSTR(pinyin,1,1) ), '_', LOWER( SUBSTR(pinyin,2) )) newField FROM district;
```