public class DataType {
  public static void main ( String[] args )
  {
    /**
      * 基本类型：byte 二进制位数：8
      * 包装类：java.lang.Byte
      * 最小值：Byte.MIN_VALUE=-128
      * 最大值：Byte.MAX_VALUE=127

      * 基本类型：short 二进制位数：16
      * 包装类：java.lang.Short
      * 最小值：Short.MIN_VALUE=-32768
      * 最大值：Short.MAX_VALUE=32767

      * 基本类型：int 二进制位数：32
      * 包装类：java.lang.Integer
      * 最小值：Integer.MIN_VALUE=-2147483648
      * 最大值：Integer.MAX_VALUE=2147483647

      * 基本类型：long 二进制位数：64
      * 包装类：java.lang.Long
      * 最小值：Long.MIN_VALUE=-9223372036854775808
      * 最大值：Long.MAX_VALUE=9223372036854775807

      * 基本类型：float 二进制位数：32
      * 包装类：java.lang.Float
      * 最小值：Float.MIN_VALUE=1.4E-45
      * 最大值：Float.MAX_VALUE=3.4028235E38

      * 基本类型：double 二进制位数：64
      * 包装类：java.lang.Double
      * 最小值：Double.MIN_VALUE=4.9E-324
      * 最大值：Double.MAX_VALUE=1.7976931348623157E308

      * 基本类型：char 二进制位数：16
      * 包装类：java.lang.Character
      * 最小值：Character.MIN_VALUE=0
      * 最大值：Character.MAX_VALUE=65535
    */
    // 基本数据类型： 以下大写开头的可以调用方法, 如果可以小写的并使用小写的不能调用方法
    int a = 0;                     // 必须小写
    char b = 'x';                 //  必须小写
    Character c = 'a';            //  必须大写，只能一个字符
    Integer d = 1263;             //  必须大写。并且可以调用方法
    String e = "weqweqqweqweqw";  // 必须大写
    Float f = 3.14f;              //  可以大小写
    Double g = 3.141592687536;    //  可以大小写
    Byte h = 'A'; // 65           //  可以大小写
    Long i = 5478353792469823231l;  //  可以大小写
    Boolean j = true;             //  可以大小写
    char k = '\ue616';
    
    System.out.println(a);

    // 复合数据类型
    Object l = new Object();
    int[] m = {1,2,3};
    System.out.println(m);
  }
}