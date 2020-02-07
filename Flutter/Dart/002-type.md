# Dart 类型

* 数字（num）
  - num 是 int 与 double 的基类
  - int 为 64 位整数，double 为 64 位浮点数

```Dart
void main() {
  // dart 自动推断为 int 类型
  var n = 1;
  var n1= 0xa;

  // 自动推断为 double 类型
  var n2 = 1.1;
  var n3 = 3.14e5;

  // 整型与浮点型的变量值类型不能转换，否则报错
  n2 = 10;
  // Error: A value of type 'double' can't be assigned to a variable of type 'int'.

  // 如果其值有可能是一个浮点型，可以用 double 来声明
  double n4 = 1;
  n4 = 3.14159;
  print(n4);
  //  3.14159

  var n5 = int.parse('1');
  assert( n5 == 1 );
  var n6 = double.parse('1.1');
  assert( n6 == 1.1 );
}
```

* 字符串（String）
   - 字符串是 UTF-16 码元 （Code Unit） 序列，每个 Unicode 字符映射为 1 个或 2 个码元
   - 字符串字面量可以使用单、双引号
   - 使用 `${expression}` 来插入变量值，如果 expression 是个合法的标识符，则可以省去 {}
   - 使用毗连字符串常量或者 + 操作符来拼接字符串
   - 使用三重引号来定义多行字符串
   - 使用 r 前缀来声明原始字符串，其内不作字符转移
   - 只要内部插入的表达式为编译时常量，则字符串字面量为编译时常量

```Dart
void main() {
  String s1 = 1.toString();
  assert( s1 == '1' );

  String s2 = 3.1415926.toStringAsFixed(2);
  assert( s2 == '3.14' );

  // 字符串可以单引号也可以双引号，多行字符串也同样可以单双引号
  String s3 = '''第一行
  第二行
  ...
  ''';

  // 字符串拼接
  String say = 'hello'" my name is bill";
  print(say);
  // hello my name is bill
  // 等同于
  String say1 = 'hello'' my name is bill';
  // 等同于
  String say2 = 'hello' + ' my name is bill';

  String say3 = 'my name is';
  String name = 'bill';
  print('hello, $say3 $name');
  // hello, my name is bill
}
```

* 布尔（bool）
   - 只有两个值 `true` 与 `false`，都是编译时常量
   - 在需要布尔类型的地方必须使用布尔值
* 列表（List）
   - 列表十九其它语言里的数组，用来表示对象序列
   - 列表索引序号从 0 开始，直到 list.length - 1
   - 在列表字面量前使用 `const` 来声明常值
   - 使用 [] 操作符来操作列表元素
* 哈希表（Map）
   - 哈希表用来关联键和值，键和值可以是任意类型的对象，但键必须唯一
   - 使用 [] 操作符来操作哈希表的值
   - 在哈希表字面量前使用 `const` 来声明常值
* 符文（Rune）
   - Rune 是由 UTF-32 码点（Code Point）组成的字符串，一个 Rune 字符对应一个 Unicode 字符
   - 码点一般使用 4 个 十六进制字符（\uxxxx）来表示，如果超过 4 个，则需要使用 {} 将十六进制字符括起来
   - 字符串和 Rune 直接可互相转换