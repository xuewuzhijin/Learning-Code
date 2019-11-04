# MYSQL 分组函数

主要用来做统计使用，称为统计函数，聚合函数，组函数

> 所有函数都会忽略 NULL 值，例如， SUM 不会与字段为 NULL 的值求和， AVG 不会与字段 NULL 的值相加， COUNT NULL 不计算在内

## 目录

* [SUM](#SUM)
* [AVG](#AVG)
* [MAX](#MAX)
* [MIN](#MIN)
* [COUNT](#COUNT)

    相同点
    SUM AVG
    用于处理数值型数据，字符型不受支持
    MAX MIN COUNT
    可以处理任何类型数据

    注意点
    当与以上某个函数一同查询时，只会出现一行数据，例如，下面运行结果只有一行数据
    SELECT `name`, SUM(`order`) FROM district;

### SUM

```sql
-- 求列的和
SELECT SUM(`order`) FROM district;
-- 23375
SELECT SUM( DISTINCT `order`) FROM district;
-- 741
```

### AVG

```sql
-- 求列的平均值
SELECT AVG(`order`) FROM district;
-- 6.5403
SELECT AVG( DISTINCT `order`) FROM district;
-- 19.5000
```

### MAX

```sql
-- 求列的最大值
SELECT MAX(`order`) FROM district;
-- 38
SELECT MAX( DISTINCT `order`) FROM district;
-- 38
```

### MIN

```sql
-- 求列的最小值
SELECT MIN(`order`) FROM district;
-- 1
SELECT MIN( DISTINCT `order`) FROM district;
-- 1
```

### COUNT

> `*`, `1`, `[any]` 都可以使用，意思就是在表中新增一个虚拟的字段列，值为所填写的值，返回所有行数

    效率
    MYISAM 储存引擎下 COUNT( * ) 的效率高
    INNODE 储存引擎下 COUNT( * ) 和 COUNT( 1 ) 的效率差不多，比 COUNT( [字段] ) 要高一些

```sql
-- 列的计数（表示有多少行）
SELECT COUNT(`order`) FROM district;
-- 3574
SELECT COUNT( DISTINCT `order`) FROM district;
-- 38
SELECT COUNT( * ) FROM district;
-- 3574
SELECT COUNT( 1 ) FROM district;
-- 3574
```

### 练习题

```sql
SELECT
    SUM(`order`) 和,
    AVG(`order`) 平均,
    MAX(`order`) 最大值,
    MIN(`order`) 最小值,
    COUNT(`order`) 总计
FROM district;

-- 和           平均            最大值          最小值          总计
-- 23375        6.5403         38             1              3574
```