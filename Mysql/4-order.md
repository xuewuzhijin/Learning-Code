# 通过使用 ORDER BY 让数据排序

    语法：
    SELECT * FROM [ 表名 ] [ WHERE 语句 ] ORDER BY [ 字段名|别名 ] [ DESC|ASC ];

    特点：
    1. ASC 代表升序（ MYSQL 默认就是升序 ），DESC 代表降序
    2. ORDER BY 子句中可以包含单个字段，多个字段，表达式，函数，别名
    3. ORDER BY 子句一般是放在查询语句的最后面，LIMIT 子句除外

* [排序查询](#排序查询)
* [别名排序](#别名排序)
* [函数排序](#函数排序)
* [多字段排序](#多字段排序)
* [练习题](#练习题)

### 排序查询

```sql
    -- 1. code 来倒序排列
    SELECT * FROM district ORDER BY `code` DESC;

    -- 2. code 来正序排列
    SELECT * FROM district ORDER BY `code` ASC;
    
    -- 3. order 大于等于20，按创建时间来排序
    SELECT * FROM district WHERE `order` >= 20 ORDER BY create_date ASC;
```

### 别名排序

```sql
    -- 1. 按 parent_id * order 并起别名来 倒序排序
    SELECT *, parent_id * `order` AS neworder FROM district ORDER BY parent_id * `order` DESC;
    -- 等同于 (后面的条件表达式可以用别名来排序)
    SELECT *,parent_id * `order` AS neworder FROM district ORDER BY neworder DESC;
```

### 函数排序

```sql
    -- 1. 按 pinyin 字符长度来排序
    SELECT id, pinyin, LENGTH(pinyin) FROM district ORDER BY LENGTH(pinyin) DESC;
    -- 等同于
    SELECT id, pinyin, LENGTH(pinyin) AS 长度 FROM district ORDER BY 长度 DESC;
```

### 多字段排序

```sql
    -- 1. 按 order 倒序排列 id 正序排列 并且 id 小于等于 100
    SELECT id, `name`, pinyin, `order` FROM district WHERE id <= 100 ORDER BY `order` DESC, id;
    -- 等同于( id 没写 ASC ，但可以省略，默认就是 ASC 排序)
    SELECT id, `name`, pinyin, `order` FROM district WHERE id <= 100 ORDER BY `order` DESC, id ASC;
    -- 查询出来的结果若 order 的值在相同的情况下根据第二个 id 的值来正序排列， 若 id 的值还是相同的情况下，此时没有其它排序规则，那么根据系统规则自动排序。
```

### 练习题

```sql
    -- 1. 按 pinyin 字段中包含 a 的值，并以拼音长度来 倒序排列， id 正序排列
    SELECT pinyin, `order`, id FROM district WHERE pinyin LIKE '%a%' ORDER BY LENGTH(pinyin) DESC, id;
```