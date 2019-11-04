通过使用 WHERE 来筛选数据

### 按条件表达式筛选

条件运算符：`<` - `>` - `=` - `!=` - `<>` - `>=` - `<=`

```sql

-- 条件筛选
SELECT * FROM district WHERE parent_id = 0;

SELECT * FROM district WHERE parent_id < 1;

SELECT * FROM district WHERE parent_id <> 0;

```

### 按逻辑表达式筛选

逻辑运算符：`&&` - `||` - `!` - `and` - `or` - `not`

```sql

-- 逻辑筛选
-- 1. order 大于等于10并且小于等于20
SELECT * FROM district WHERE `order` >= 10 AND `order` <= 20;

-- 2. order 不在50到100之间，或者 parent_id 大于 30
SELECT * FROM district WHERE `order` < 50 AND `order` > 100 OR parent_id > 30;
-- 或者
SELECT * FROM district WHERE NOT( `order` >= 50 AND `order` <= 100 ) OR parent_id > 30;

```

### 模糊查询

模糊查找：`like` - `between  and` - `in` - `is null` - `is not null` - `<=>`
1. % 表示任意字符，可以是多个，可以是0个
2. _ 表示一个字符
3. 转义：\ 或者 ESCAPE '$'
4. is null 仅仅可以判断 null 值
5. <=>（安全等于） 既可以判断 null 值，也可以判断普通数值

```sql

-- 模糊查询
-- 1. pinyin 中包含 a 
SELECT * FROM district WHERE pinyin LIKE '%ab%';

-- 2. name 中包含 湖
SELECT * FROM district WHERE `name` LIKE '%湖%';

-- 3. pinyin 中第三个字符为 a 第五个字符为 b 的
SELECT `name`,pinyin FROM district WHERE pinyin LIKE '__a_b%';

-- 4. pinyin 中第二个字符为 _ 的
SELECT pinyin FROM district WHERE pinyin LIKE '_\_%';
-- 或者
SELECT pinyin FROM district WHERE pinyin LIKE '_$_%' ESCAPE '$';

-- 5. 查询 order 在 30 到 40 之间
SELECT * FROM district WHERE `order` >= 30 AND `order` <= 40;
-- 等同于
SELECT * FROM district WHERE `order` BETWEEN 30 AND 40;
-- 注意，30 和 40 的顺序不能颠倒了，否则就是 大于等于 40， 小于等于 30

-- 6. 查询 initials ab, cd, sd 其中一个
SELECT `name`,initials FROM district WHERE initials = 'ab' OR initials = 'cd' OR initials = 'sd';
-- 等同于
SELECT `name`,initials FROM district WHERE initials IN('ab','cd','sd');

-- 7. 查询 null 值, 这种情况一般用于数据表初始值为 null 或者数据被设为 null 来查询 null 值
SELECT `name`,`code`,`order` FROM district WHERE `code` IS NULL;
-- 等同于
SELECT `name`,`code`,`order` FROM district WHERE `code` <=> NULL;

-- 8. 查询不是 null 值
SELECT `name`,`code`,`order` FROM district WHERE `code` IS NOT NULL;

```