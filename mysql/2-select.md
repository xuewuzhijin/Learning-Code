通过使用 SELECT 来选择表

```sql
    USE district;
```

### 查询表的单个字段

```sql
    SELECT initial from district;
```

### 查询表的多个字段

```sql
    SELECT initial,initials,pinyin FROM district;
```

### 查询表的所有字段

```sql
    SELECT * FROM district;

    -- 或者
    SELECT  
        `id`,
        `name`,
        `parent_id`,
        `initial`,
        `initial`,
        `pinyin`,
        `extra`,
        `suffix`,
        `code`,
        `area_code`,
        `order`
    FROM
        district;
    -- 这个优势在于查询数据清晰，能够根据自己需求自定义字段的顺序
```

### 查询常量值

```sql
    SELECT 100;
    SELECT 'john';
```

### 查询表达式

```sql
    SELECT 100*5;
```

### 查询函数

```sql
    SELECT VERSION();
```

### 字段起别名

```sql
    /*
        1. 便于理解
        2. 如果要查询的字段有重名，使用别名可以区分
        3. 起别名可以不用加引号，但如果别名恰好是系统关键字，那么就会报错，这种情况别名最好用字符串，也就是使用双引号
    */
    SELECT 100%98 as result;
    SELECT initial as 首字母,initials as 每个首字母 FROM district;
    -- 或者不用 as 直接用空格
    SELECT initial 首字母,initials 每个首字母 FROM district;
```

### 去重

```sql
    SELECT DISTINCT initial FROM district;
```

### + 号的作用

```sql
    /*
        1. A 与 B 都为数值类型 结果是两者之间的和
        2. A 与 B 其中一方或者 N个 为数字字符串类型， 会自动将字符串转为数值
        3. 只要又一个不是数值的字符串类型，自动把这个转换为 0 在执行加号运算
        4. 只要其中一个值为 null ，结果一定为 null
    */
    SELECT 100 + 20;
    -- 120

    SELECT "100" + 20;
    -- 120

    SELECT "100" + "20";
    -- 120

    SELECT "100" + "20" + "A" + "30";
    -- 150

    SELECT "A" + "B";
    -- 0

    SELECT null + "100" + "20" + "A" + "30";
    -- null

    SELECT `parent_id` + `order` FROM district;
```

### CONCAT(a,b,c,...) 字符串拼接

```sql
    /*
        1. 如果拼接参数中的某个字段值为 null 那么值一定为 null，与加号运算相同
        2. 如果一列字段中既有 null 又有值 那么可以使用 IFNULL([字段名],0)，意思是指，如果这个字段值为 null ，那么就拼接 0
    */
    SELECT CONCAT(100,200,300);
    -- 100200300
    SELECT CONCAT(parent_id,`order`) FROM district;
    SELECT CONCAT(parent_id,IFNULL(`order`,0)) AS result FROM district;
```