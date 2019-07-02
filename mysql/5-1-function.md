# MYSQL 的数学函数与日期函数

## 目录

* [数学函数](#ROUND)
  + [ROUND](#ROUND)
  + [CEIL](#CEIL)
  + [FLOOR](#FLOOR)
  + [TRUNCATE](#TRUNCATE)
  + [MOD](#MOD)

* [日期函数](#日期函数)
  + [NOW](#NOW)
  + [CURDATE](#CURDATE)
  + [CURTIME](#CURTIME)
  + [YEAR](#YEAR)
  + [MONTH](#MONTH)
  + [DAY](#DAY)
  + [HOUR](#HOUR)
  + [MINUTE](#MINUTE)
  + [SECOND](#SECOND)
  + [STR_TO_DATE](#STR_TO_DATE)
  + [DATE_FORMAT](#DATE_FORMAT)

### ROUND

    四舍五入,后面的参数表示保留几位小数

    格式
    ROUND(X,N)

```sql
SELECT ROUND(1.2);
-- 1
SELECT ROUND(1.5);
-- 2
SELECT ROUND(-1.45);
-- -1
SELECT ROUND(-1.66);
-- -2
SELECT ROUND(1.45789,3);
-- 1.458
```

### CEIL

    向上取整,返回 大于等于 该参数的最小整数

    格式
    CEIL(X)

```sql
SELECT CEIL(1.23);
-- 2
SELECT CEIL(-1.2);
```

### FLOOR

    向下取整，返回 小于等于 该参数的最小整数

    格式
    FLOOR(X)

```sql
SELECT FLOOR(1.3);
-- 1
SELECT FLOOR(1.8);
-- 1
SELECT FLOOR(-9.9);
-- -10
```

### TRUNCATE

    截断,后面的参数表示保留几位小数

    格式
    TRUNCATE(X,D)

```sql
SELECT TRUNCATE(1.666,2);
-- 1.66
SELECT TRUNCATE(-1.666,2);
-- -1.66
SELECT TRUNCATE(8888,1);
-- 8888
```

### MOD

    取余,计算规则 N - (N / M) * M , 若 除完后的商为小数，那么向下取整

    格式
    MOD(N,M)

```sql
SELECT MOD(10,3);
-- 1
SELECT MOD(-10,-3);
-- -1
```

## 日期函数

### NOW

    返回当前系统日期 + 时间

    格式
    NOW()

```sql
SELECT NOW();
-- 2019-04-19 21:42:41
```

### CURDATE

    返回当前系统日期

    格式
    CURDATE()

```sql
SELECT CURDATE();
-- 2019-04-19
```

### CURTIME

    返回当前系统的时间

    格式
    CURTIME()

```sql
SELECT CURTIME();
-- 21:44:31
```

### YEAR

```sql
SELECT YEAR(NOW());
-- 2019
SELECT YEAR('1998-1-2');
-- 1998
```

### MONTH

```sql
SELECT MONTH(NOW());
-- 4
SELECT MONTH('1998-1-2');
-- 1
-- 获取月份的英文
SELECT MONTHNAME(NOW());
-- April
```

### DAY

```sql
SELECT DAY(NOW());
-- 19
```

### HOUR

```sql
SELECT HOUR(NOW());
-- 21
```

### MINUTE

```sql
SELECT MINUTE(NOW());
-- 54
```

### SECOND

```sql
SELECT SECOND(NOW());
-- 29
```

### STR_TO_DATE

    将正确格式的字符换转换成日期

    格式
    STR_TO_DATE(str,format)

    format 格式
    +-------------+------------------------+------------------------------------------+
    | 序号        | 格式符                  | 功能                                      |
    +-------------+------------------------+------------------------------------------+
    | 1          | %Y                      | 4位的年份                                 |
    | 2          | %y                      | 2位的年份                                 |
    | 3          | %m                      | 月份（01，02,...12)                       |
    | 4          | %c                      | 月份（1，2,...12)                         |
    | 5          | %d                      | 日（01，02,...）                          |
    | 6          | %H                      | 小时（24小时制）                           |
    | 7          | %h                      | 小时（12小时制）                           |
    | 8          | %i                      | 分钟（00，01，...59）                      |
    | 9          | %s                      | 秒（00，01,...59）                        |
    +-------------+------------------------+------------------------------------------+

```sql
SELECT STR_TO_DATE('2019-04-19','%Y-%c-%d');
-- 2019-04-19
SELECT STR_TO_DATE('19-04-2019','%d-%m-%Y');
-- 2019-04-19
-- 按照不同的场景来使用 format 参数
SELECT STR_TO_DATE('1 3/19','%d %m/%y');
-- 2019-03-01
```

### DATE_FORMAT

    参照上方 format 格式表来设置需要的值

```sql
SELECT DATE_FORMAT(NOW(),'%y年%m月%d日');
-- 19年04月19日
```