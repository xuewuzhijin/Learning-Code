# MYSQL 流程控制函数与其它函数

## 目录

* [流程控制函数](#流程控制函数)
  + [ROUND](#ROUND)
  + [CEIL](#CEIL)
  + [FLOOR](#FLOOR)
  + [TRUNCATE](#TRUNCATE)
  + [MOD](#MOD)

* [其它函数](#其它函数)
  + [VERSION](#VERSION)
  + [DATABASE](#DATABASE)
  + [USER](#USER)


## 流程控制

### IF

    类似三目运算 [expr1 条件] [expr2 为真时] [expr3 为假时]

    格式
    IF(expr1,expr2,expr3)

```sql
SELECT IF(5>10,'大','小');
-- 小
```

### CASE

    格式 1
    CASE case_value
    WHEN value1 THEN statement_list1
    WHEN value2 THEN statement_list2
    WHEN value3 THEN statement_list3
    ...
    ELSE statement_list
    END

    格式 2
    CASE
    WHEN value1 THEN statement_list1
    WHEN value2 THEN statement_list2
    WHEN value3 THEN statement_list3
    ...
    ELSE statement_list
    END

```sql
-- 格式 1 练习题
-- 当 parent_id 等于 0/1/2 的时候，新建字段 级别 为 name + 是一/二/三级,否则返回 没级别

SELECT `name`,parent_id,
CASE parent_id
WHEN 0 THEN CONCAT(`name`,'是一级')
WHEN 1 THEN CONCAT(`name`,'是二级')
WHEN 2 THEN CONCAT(`name`,'是三级')
ELSE '没级别'
END AS 级别 FROM district;

-- 格式 2 练习题
-- parent_id 小于 10/20/30/40/50 的时候 新建字段 位置 值为 我在10/20/30/40/我也不知道在哪 以内的

SELECT `name`,parent_id,
CASE
WHEN parent_id < 10 THEN '我在10以内'
WHEN parent_id < 20 THEN '我在20以内'
WHEN parent_id < 30	THEN '我在30以内'
WHEN parent_id < 40	THEN '我在40以内'
ELSE '我也不知道在哪'
END 位置 FROM district;
```

---

## 其它函数

### VERSION

```sql
SELECT VERSION();
-- 8.0.15
```

### DATABASE

```sql
SELECT DATABASE();
-- district
```

### USER

```sql
SELECT USER();
-- root@localhost
```