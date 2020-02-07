# Dart 变量

- 变量类型可自动推断，或者显示指定

```Dart
void main() {
  var str = 'bill';
  // 此时的 Dart 自动推断 str 为字符串类型，它等同于
  String str = 'bill';  //  当使用 String 时，它也是声明变量的一种方式

  // 以上无论使用哪种方式定义的变量，此时的变量名无法更改其值的类型，如：
  var oStr = 'bill';
  oStr = 10;
  // Error: A value of type 'int' can't be assigned to a variable of type 'String'.
};
```

- 未初始化的变量其值都为null

```Dart
void main() {
  var str;
  print(str);
  // null
}
```

- 如果某个变量的值在定义后不会再改变，那就声明为常量（final、const）

```Dart
void main() {
  var obj = {
    'name': 'bill',
    'age': 25
  };
  // 如果名字及年龄不会再变化可让该变量成为一个常量
  const obj = {
    'name': 'bill',
    'age': 25
  };
  // 或者
  final obj = {
    'name': 'bill',
    'age': 25
  };
}
```

- `final` 与 `const` 的区别

```Dart
void main() {
// 相同点：
  //  1. 必须在其定义时完成值的初始化
  const str;
  final obj;
  // Error: The const/final variable ';' must be initialized.
  
  final a = 1;
  final b = 2;
  const c = 1;
  const d = 2;
  final e = a + b;
  const f = c + d;
  print(e); // 3
  print(f); // 3

// 不同点：
  //  1. const 变量的值须为编译时的常量， final 变量的值须为运行时的常量
  final time = DateTime.now();
  // 正确，代码运行时有确定的值

  const time1 = DateTime.now();
  // 错误，需要在代码编译时有确定的值

  // 举个简单的例子
  int sum() => 1 + 1;

  final s1 = sum();
  print(s1);  // 2

  const s2 = sum(); // 代码在编译时这里就会报错，
  // Error: Not a constant expression.
  print(s2);

  //  2. 不可变性传递
  final arr = [1,2,3];
  arr[0] = 0;
  print(arr);
  //  [0,2,3]

  const arr1 = [4,5,6];
  arr1[0] = 0;
  //  Uncaught Error: Unsupported operation: indexed set
  print(arr1);

  // 这里涉及到了一个 `常量` 与 `常值` 的区别

  // 假设 arr 的值内存地址为 0x0001，arr1 为 0x0002；
  // 根据常量（final、const）不能更改其值的规则，const 具备不可变性传递
  // 此时的它类似于 JavaScript 中的 Object.freeze 对象冻结

  // 简单说 const 除了不能更改其值，并且其值内部的值（如果有）都不能进行更改

  // 3. 值相同时final在内存中重复创建，const会引用相同值
  final arr2 = [1,1,1];
  final arr3 = [1,1,1];
  print( identical(arr2,arr3) );
  // false

  const arr4 = [2,2,2];
  const arr5 = [2,2,2];
  print( identical(arr4,arr5) );
  // true
}
```

- `const` 除了用来声明常量，也可以用来声明值

```Dart
void main() {
  var arr = const [1,2,3];
  arr[0] = 0;
  // Uncaught Error: Unsupported operation: indexed set
  print(arr);

  // 此时 arr 的值为一个常值，常值是不可更改的
}
```

**常量与常值**

使用 `const` 声明常量时，得到的值一定是一个常值

> 常值用来防止内容变化，常量用来避免变量寻址，`final` 变量用来提升代码安全性