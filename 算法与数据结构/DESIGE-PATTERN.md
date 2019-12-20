# 23种设计模式

## 目录

### 创建型：
 * [单例模式](#单例模式)
 * [工厂模式](#工厂模式)
     * [工厂方法模式](#工厂方法模式)
     * [抽象工厂模式](#抽象工厂模式)
 * [原型模式](#原型模式)
 * [建造者模式](#建造者模式)
 
### 结构型：
 * [设配器模式](#设配器模式)
 * [桥接模式](#桥接模式)
 * [组合模式](#组合模式) 
 * [装饰模式](#装饰模式)
 * [门面模式](#门面模式)
 * [享元模式](#享元模式)
 * [代理模式](#代理模式)

### 行为型：
 * [责任链模式](#责任链模式)       
 * [命令模式](#命令模式)
 * [解释器模式](#解释器模式)
 * [迭代器模式](#迭代器模式)
 * [中介模式](#中介模式)
 * [备忘录模式](#备忘录模式)
 * [观察者模式](#观察者模式)
 * [状态模式](#状态模式)
 * [策略模式](#策略模式)
 * [模板方法模式](#模板方法模式)
 * [访问者模式](#访问者模式)
 
 
 ## 模式解析
 
 # 创建型模式
 ### 单例模式

> 单例模式：系统对此对象只实例化一次，之后供全局共享，所以创建时需要考虑线程安全 
  ````java
    public class Demo {
        public static void main(String[] args){
                Earth.getInstance().responsibility();
        }   
}
//--------------------------------------------------------
    class Earth{

    public static Earth single = new Earth();
    
    public Earth getInstance(){
        return single;
    }
    
    public void responsibility(){
       System.out.println("保护我们");
    }
}
````

### 工厂模式

> 工厂模式：用于生成某一系列对象的工具类

> 1 : 简单工厂模式

```java
package com.prb.factory;

public class StaticFactoryApp{
    
    public static void main(String[] args){
      Teacher teacher = (Teacher) StaticFactory.getObject("teacher");
      Student student = (Student) StaticFactory.getObject("student");
      teacher.say();
      student.say();
    }

}
//==========================================
class StaticFactory{
    
    public static Object getObject(String name){
        if(name.equals("teacher")){
            return new Teacher();
        }
        if(name.equals("student")){
            return new Student();
        }
        return null;
    }    
}


class Teacher{
    public void say(){
        System.out.println("上课。。。。。。。。。。。。。。");
    }
}
class Student{
    public void say(){
        System.out.println("老师好。。。。。。。。");
    }
}
```
> 2:工厂方法模式
```java
package com.prb.factory;

public class Factory{
    public static void main(String[] args){
        
        ToyFactory toyFactory = new TrainFactory();
        Toy trainToy = toyFactory.getObject();
        trainToy.price();
        
        toyFactory = new AircraftFactory();
        Toy aircraftToy = toyFactory.getObject();
        aircraftToy.price();
}
    
}

interface ToyFactory{
    public Toy getObject();
}

class TrainFactory implements ToyFactory{
    public Toy getObject(){
        return new TrainToy();
    }
}

class AircraftFactory implements ToyFactory{
    public Toy getObject(){
        return new AirCraft();
    }        
    
}

interface Toy{
    public void price();
}

class TrainToy implements Toy{
    public void price(){
        System.out.println("价格50￥");
    }
}
 
class AirCraft implements Toy{
    public void price(){
        System.out.println("价格80￥");
}
}
```

### 抽象工厂模式

> 抽象工厂模式: 很容易使用一系列的产品对象
```java
package com.prb;

public class AbstractFactory{
    public static void main(String[] args){
        DbFactory dbFactory = new MySqlFactory();
        IUser user = dbFactory.user();
        user.addUser(new User());
        user.delUser(1l);
        user.updUser(new User());
        user.getUserById(1l);

        IDetails details = dbFactory.details();
        System.out.println(details.getMsg());

        dbFactory = new OracleFactory();
        user = dbFactory.user();
        user.addUser(new User());
        user.delUser(1l);
        user.updUser(new User());
        user.getUserById(1l);

        details = dbFactory.details();
        System.out.println(details.getMsg());
}
}

interface DbFactory{
    public IUser user();
    public IDetails details();
}

class MySqlFactory implements DbFactory{
    public IUser user(){
        return new MysqlUser();
    }
    public IDetails details(){
        return new MysqlDetails();
    }

}

class OracleFactory implements DbFactory{
    public IUser user(){
        return new OracleUser();
    }
    public IDetails details(){
        return new OracleDetails();
    }

}


interface IUser{
    public Boolean addUser(User user);
    public Boolean delUser(Long userId);
    public Boolean updUser(User user);
    public User getUserById(Long userId);

}

class MysqlUser implements IUser{
    public Boolean addUser(User user){
        System.out.println("mysql add user");
        return true;
    }

        public Boolean delUser(Long userId){
        System.out.println("mysql del user");
        return true;
    }   
        public Boolean updUser(User user){
        System.out.println("mysql upd user");
        return true;
    }
        public User getUserById(Long userId){
        System.out.println("mysql get user");
        return new User();
    }
}
class OracleUser implements IUser{
    public Boolean addUser(User user){
        System.out.println("oracle add user");
        return true;
    }

        public Boolean delUser(Long userId){
        System.out.println("oracle del user");
        return true;
    }   
        public Boolean updUser(User user){
        System.out.println("oracle upd user");
        return true;
    }
        public User getUserById(Long userId){
        System.out.println("oracle get user");
        return new User();
    }
}


interface IDetails{
    public String getMsg();
}

class MysqlDetails implements IDetails{
    public String getMsg(){
        return "mysql getMsg";
    }
}


class OracleDetails implements IDetails{
    public String getMsg(){
        return "oracle getMsg";
    }
}
class User{
    public String name;
    public Integer age;
}

class Details{
    public String msg;
}

```

### 原型模式

>原型模式： 拷贝原对象进行创建新对象 (分为浅拷贝：拷贝对象的内存地址 / 深拷贝：拷贝整个对象)

```java
package com.prb.clone;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class CloneApp {
    public static void main(String[] args) throws Exception {

        ShallowClone shallowClone = new ShallowClone();
        ShallowClone shallow = shallowClone.clone();
        System.out.println(shallow.peoples);
        shallow.name = "clone";
        shallow.peoples.get(0).age = 50;
        System.out.println(shallow.name + shallow.peoples.get(0).age);
        System.out.println(shallowClone.name);
        System.out.println("============shallow spilt line ===================");
        System.out.println(shallowClone.name + shallowClone.peoples.get(0).age);
        System.out.println(shallowClone.peoples == shallow.peoples);

        System.out.println("==================分割线======================================");
        DeepClone deepClone = new DeepClone();
        System.out.println(deepClone.peoples);
        DeepClone deep = deepClone.deepClone();
        System.out.println(deep.peoples == deepClone.peoples);

    }
}
//基本数据类型 和 String 都会拷贝 但对象只会拷贝内存地址
class ShallowClone implements Cloneable {
    public String name = "shallowClone";
    public List<People> peoples = new ArrayList<>();

    public ShallowClone() {
        peoples.add(new People());
    }

    @Override
    protected ShallowClone clone() throws CloneNotSupportedException {
        return (ShallowClone) super.clone();
    }
}

class DeepClone implements Serializable {
    public String name = "deepClone";
    public List<People> peoples = new ArrayList<>();

    public DeepClone() {
        peoples.add(new People());
    }


    public DeepClone deepClone() throws Exception {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutputStream ojo = new ObjectOutputStream(bos);

        ojo.writeObject(this);

        ByteArrayInputStream bis = new ByteArrayInputStream(bos.toByteArray());
        ObjectInputStream oji = new ObjectInputStream(bis);

        return (DeepClone) oji.readObject();

    }
}

class People implements Serializable {
    Integer age = 10;
    public void say() {
        System.out.println("i am people");
    }
}
```
### 建造者模式

> 建造者模式： 通过组合的模式，将一个复杂的对象拆分成多个部分，通过外部注入的方式，进行构建对象
```java
package com.prb;

public class BuildApp{
    public static void main(String[] args){
        Human.INSTANCE.buildHeart(new Heart()).buildArm(new Arm()).buildLeg(new Leg());
        Human.INSTANCE.run();
        Human.INSTANCE.take();
        Human.INSTANCE.jump();
    }
}

class Human{
    
    public static Human INSTANCE = new Human();
    private Heart heart;
    private Arm arm;
    private Leg leg;
    public Human buildHeart(Heart heart){
        this.heart = heart;
        return this;
    }
    public Human buildArm(Arm arm){
        this.arm = arm;
        return this;
    }
    public Human buildLeg(Leg leg){
        this.leg = leg;
        return this;
}

    public void run(){
        leg.run();
    }
    public void take(){
        arm.take();
    }    
    public void jump(){
        heart.jump();
}
}

class Heart{
    public void jump(){
        System.out.println("心脏跳动");
    }
}

class Arm{
    public void take(){
        System.out.println("手提东西");
    }
}

class Leg{
    public void run(){
        System.out.println("腿跑步");
}  

}
```
# 结构型模式

### 适配器模式

>适配器模式：
```java
package com.prb.adapter;

public class AdapterApp{
    public static void main(String[] arg){

        Zoo zoo = new Zoo();
        Animal animal = new Animal();
        zoo.setAnimal(animal);
        zoo.jump();
        zoo.eat();

        Animal human = new Human();
        zoo.setAnimal(human);
        zoo.jump();
        zoo.eat();
    }
}

class Zoo {
    private Animal animal;
    public void setAnimal(Animal animal){
        this.animal = animal;
    }
    public void  jump(){
        animal.jump();
    }
    public void eat(){
        animal.eat();
    }
}

class Animal{
    public void jump(){
        System.out.println("动物跳起来");
    }

    public void eat(){
        System.out.println("动物吃食物");
    }
}


abstract class AnimalAdapter extends Animal{

}

class Human extends AnimalAdapter {

    public void jump(){
        System.out.println("人跳起来");
    }
}
```
# 代理模式
> 代理模式 ： 静态代理 动态代理（jdk代理 cglib 代理）

### 静态代理
```java

```
### jdk代理
```java


```

### cglib代理
```java

```





