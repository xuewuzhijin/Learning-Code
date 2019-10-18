# JAVA

> Java的一些学习例子

## 目录

* [安装](#安装)

### 安装

首先需要安装一个 `Java JDK` 工具, 下面是官网下载地址

1.[JavaJDK下载页面](#https://www.oracle.com/technetwork/java/javase/downloads/index.html)

2.下载完成后安装，在命令行执行, 看到下面的输出说明执行成功了

```bash
java -version
# java version "12.0.2" 2019-07-16
# Java(TM) SE Runtime Environment (build 12.0.2+10)
# Java HotSpot(TM) 64-Bit Server VM (build 12.0.2+10, mixed mode, sharing)
```

3.第一个 Hello World

```bash
# 创建一个Java项目文件
mkdir JavaProject
cd JavaProject
touch yourJava.java
vi yourJava.java
```

4.编辑 `yourJava.java` 文件

```java
public class yourJava {
  /** 注意事项：
   * 1. 类名 [yourJava] 必须要与文件名一致
   * 2. 入口文件必须要有 main 函数，函数必须是 static 及 void，表示是一个静态函数及输出为空
   * 3. 每条语句结尾必须要分号结尾
   */
  public static void main ( String arg[] )
  {
    System.out.println("Hello World");
  }
}
```

5.命令行运行 Java 程序

```bash
javac yourJava.java
# 输入后没有返回值，但会生成一个 yourJava.class 文件
java yourJava
# -> Hello World
```
