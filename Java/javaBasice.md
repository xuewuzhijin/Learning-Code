# 这是一篇关于java基础的 md

>final : 是Java 关键字 被该关键字修饰的基本数据类型的值是不可以改变的
>被该关键字修饰的对象引用，内存地址是不可以改变的

```java
package com.prb.test;

public class Test {

    public static final Person human = new Human();

    public static final Integer age = 10;
    public static void main(String[] args) {
        //编译不通过
        age = 13;
        System.out.println(age);
        //赋值失败 编译不通过
        human = new Human();
        human.eat();
    }
}

final class Human extends Person{
    //编译不通过 不能重写父类的final 修饰的方法
    public void eat(){
        System.out.println("吃完饭，碎觉");
    }
}

class Person{

    public final void eat(){
        System.out.println("吃饭");
    }
}
```
### 抽象类 和 接口

### 类的加载顺序
>1.静态 比 非静态 优先

> 2.静态成员变量 和静态代码块 是根据代码位置来决定优先级

> 3.普通变量 和 普通代码块的顺序 也是通过代为的位置决定优先级

> 4.最后才去加载构造方法


