# java 并发编程

>执行Java程序时，会构建一个执行栈，将变量从主存拷贝到工作内存，操作完变量后，在同步到主存，这会出现一个线程安全问题

```java
package com.prb.juc;
 
 public class DeadLockDemo{
     public static void main(String[] args){
     Fin fin = new Fin();
 
         new Thread(fin).start();
         while(true){
             if(fin.getFlag()){
                 //永远不会打印   
                 System.out.println("i want to stop.......");
             }
     }
 
 }
 
 }
 class Fin implements Runnable{
 
     private Boolean flag = false;
     
     public void run(){
         try {
             Thread.sleep(500);
             System.out.println("i am fin");
             this.setFlag(false);
         } catch (InterruptedException e) {
             e.printStackTrace();
         }
 }
 
     public void setFlag(Boolean flag){
         this.flag = flag;
 }
 
     public Boolean getFlag(){
         return flag;
 }
 
 
 }
```

## volatile : 能够保证内存可见性 ,被volatile 修饰的变量，不会在本地拷贝，直接引用主存的变量，只有主存更新变量，所有的线程都能够看到更新

```java
package com.prb.juc;
 
 public class DeadLockDemo{
     public static void main(String[] args){
     Fin fin = new Fin();
 
         new Thread(fin).start();
         while(true){
             if(fin.getFlag()){
                 //永远不会打印   
                 System.out.println("i want to stop.......");
             }
     }
 
 }
 
 }
 class Fin implements Runnable{
 
     private Boolean flag = false;
     
     public void run(){
         try {
             Thread.sleep(500);
             System.out.println("i am fin");
             this.setFlag(false);
         } catch (InterruptedException e) {
             e.printStackTrace();
         }
 }
 
     public void setFlag(Boolean flag){
         this.flag = flag;
 }
 
     public Boolean getFlag(){
         return flag;
 }
 
 
 }
```
