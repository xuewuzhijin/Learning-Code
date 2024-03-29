# VIM的一些常见命令

首先介绍一些常用的 `vi` 命令

## 目录
* [初学者](#初学者)
* [入门](#入门)
* [青铜](#青铜)
* [白银](#白银)
* [黄金](#黄金)
* [铂金](#铂金)
* [钻石](#钻石)
* [星耀](#至尊)
* [王者](#最强)

### 初学者

下面的执行后会直接进入插入模式

```vim
i 	-> 	表示可以插入字符了
I 	-> 	表示在光标这行行首进行插入
o 	-> 	表示在下一行(新的一行)开始插入
O 	-> 	表示在上一行(新的一行)开始插入
a 	-> 	表示在光标的下一个字符处插入
A 	-> 	表示在当前行的行尾插入

:w	->	写入=保存
:q	->	退出（建立在文件未被修改的情况下，否则要:q!）强制退出
:e	->	重载文件（若文件被修改，使用 :e!）强制重载


# 光标移动(非空白就是比如一行的最前面是缩进或者是空格，0 会移动到缩进和空格前面，^ 不会， $ 与 g_ 同理)

0 | ^ 	-> 	移动到行首(后者属于非空白字符前)
$ | g_ 	-> 	移动到行尾前一个(后者属于非空白字符前)

# 这里的符号指的是成双成对的，需要自己测试才明白
yy	->	[数字]复制整行
yw	->	[数字]复制单词
ya	->	如："abcdefg" 光标在地一个"这里执行 ya" 包含符号复制 
yaw	->	上面的例子，当光标在a这里执行 yaw 复制单词 不包含符号
yi	->	自动定位光标后方的符号，复制不包含符号
yiw	->	[数字]复制一个单词不包含符号
dd	->	[数字]删除整行
dw	->	[数字]删除单词
da	->	[数字]有单词删单词，没单词删字符
daw	->	[数字]删除单词，有空格连空格也删
di	->	[数字]删除目标符号内的单词，不包含符号
diw	->	[数字]删除单词，不删空格

Esc | Ctrl + [ -> 回退到 normal 模式
```

### 入门

删除命令：可以搭配数字来操作如 2x 删除两个字符， 2dw 删除两个单词

```vim
x	->	[数字]删除字符（没数字情况下1个字符）
d	->	[数字]删除单词（要配合其它命令来操作）
dh	->	删除左边一个字符
dj	->	～当前行与下一行
dk	->	～当前行与上一行
dl	->	～右边一个字符
d$	->	～当前光标位置删除到行尾
dg_	->	～当前光标位置到行尾（不包括空白/缩进）
d0	->	当前光标位置删除到行首
d^	->	当前光标位置删除到行首（不包括空白/缩进）
# daw 以及dw=diw，举例，当光标在a前面：'abcd '，daw 后剩下'', diw 后剩下' '，剩下个空格
dt	->	[数字]dt[你要删的目标字符后一位]，举例：abcdefg("param"), 当光标在第一个双引号后面，dt" 那么 param 就被删了。
```

### 青铜

修改命令：以下小写都可以搭配数字来操作,以下命令都会进入插入模式

```vim
r	->	[数字]替换当前字符（没数字情况下1个字符）
R	->	从当前字符(包含自身)开始一直替换直到你退出替换模式
s	->	[数字]删除当前字符并进入插入模式
S	->	删除整行包括空白
c	->	[数字] cw=ciw|caw
		ch|cj|ck|cl|c$|cg_|c^|c0...太多了，自己体会
C	->	从当前字符（包含自身）一直删到行尾
ct	->	与上面的dt一样

" 下面两个选完后根据上面的修改及删除命令来执行，如果选的不是想要的可以通过HJKL来选择后在进行删除或修改

vi	->	快速选中当前光标后选定字符中的内容（不包含选定字符）
va	->	～（包含选定字符）
" 举例: function ("vim"){/**/}; 当光标在funciton前面的时候，vi",直接定位到双引号内的内容并选中该内容（不包含双引号），va则包含双引号
viw	->	选择一个单词（不包含空格）
vaw	->	～（包含空格 ）

u	->	撤销上面(删除与修改)的操作（表示还原）
Ctrl + r ->	恢复撤销（表示再删掉）
```

### 白银

查询命令：如果你没有设置搜索高亮会头疼，所以看看有没有设置

```vim
vi ~/.vimrc
" 让搜索结果高亮
set hls
" 一边搜索一边高亮显示
set incsearch

/	->	从文件头开始找
?	->	从文件尾开始找
n	->	跳到上一个匹配
N	->	跳到下一个匹配
*	->	*与#说是进行单词前向后向匹配，没搞懂，搞懂在写上
#	->	
```

### 黄金

搜索替换: pattern 中的检测字符如果包含$/%/[]/?/!/. 等等字符需要反斜杠，具体查看正则语法规范或者查关于vim对于正则的magic设定

```vim
:[range] {substitute}/{pattern}/{string}/[flags]
range	->	%(整个文件) | 1,100(从第一行到一百行)
substitute ->	替换模式，可以缩写成 s
pattern	->	可以使用正则表达式
string	->	要替换的字符
flags	->	[可省略] g(表示全局) | c(每次替换都询问) | n(匹配到的个数)

举例：hello world
% s/n/vim/g	（这一段表示整个文件匹配n，替换成vim）
80,83 s/world//n	(这一段表示只在80到83行匹配world，查询匹配到的个数,不替换)
举例：hello_world and hello+world and hello world
80,90 s/\W\@<!world/handsome/g	hello_world 替换成了 hello_handsome
86,90 s/[^\+]\@<!world/handsome/g hello+world 替换成了 hello+handsome
```


### 铂金

下面有点费脑力，单独拎出来放一堆

```vim
w 	-> 	光标移动到下一个单词前面（以字符类型为单位，比如一句话有中文/字母/字符，相比 W 光标会跳N+1次）
W 	-> 	光标移动到下一个单词前面（以 空格/换行符 为单位）
e 	-> 	光标移动到下一个单词结尾（对应 w 单位）
E 	-> 	光标移动到下一个单词结尾（对应 W 单位）
b 	-> 	光标移动到上一个单词开头（对应 w 单位）-> 跳到中文/字母/字符开头，也可以理解为是不同类型的前面（中文/字母/字符）
B 	-> 	光标移动到上一个单词结尾（对应 W 单位）-> 跳到空格/换行符结尾,也可以理解为是不同类型的前面（空格/换行符）


f 	-> 	光标移动到你要输入的字前面，比如光标在这里 'abcd abcd abcd'，fa 光标移动到第一个a的前面，2fa 光标移动到第二个a前面，以此类推, 还可以使用;找下一个，逗号来找上一个
t 	-> 	光标移动到你要输入的字前面的前面，如上面的例子，ta 光标移动到'前面，3ta移动到空格的前面，也就是d的后面
gi 	-> 	光标跳转到上一次编辑的位置
Ctrl + v -> 	块状选择然后根据 H（左） J（下） K（上） L（右) 根据命令来执行想要的结果，比如选择后按 d 来删除 x 来剪切...
Ctrl + h -> 	删除光标前一个的字符（适用于Terminal）
Ctrl + w -> 	删除光标前一个单词（适用于Terminal）
Ctrl + u -> 	删除当前行（适用于Terminal）
Ctrl + u -> 	上翻（normal 模式）
Ctrl + f -> 	下翻（normal 模式）

gg	-> 	移动到文件的开头
G 	->	移动到文件最后一行的行首
Ctrl + o ->	返回移动前的位置

H 	-> 	移动到当前屏幕文件的开头
M 	-> 	～中间
L 	-> 	～结尾
zz	->	把当前行放到屏幕中间显示
```

### 钻石

Vim Buffer的使用，即指通过Vim的Buffer来在一个界面操作多个文件，同时可以自定N个文件为一个Tab，一个Tab有多个窗口显示多个文件

```vim
# Buffer
" Esc normal 模式
:ls	-> 	会显示当前Vim的缓冲区下的文件
:e fileName	->	新开一个缓冲区，fileName 是你要新打开一个文件

" 通过下面几种方式来打开不同的缓冲区
:b 1	->	第一个缓冲区
:b 2	->	第二个
:bpre	->	上一个
:bnext	->	下一个
:bfirst	->	第一个
:blast	->	最后一个
:bw	->	关闭当前缓冲区
:bd	->	[数字|文件名]删除指定的缓冲区
:q	->	(在仅有一个窗口下)危险操作，无论你打开了多少个缓冲区，全部删除并退出Vim编辑界面


# Windows(窗口): 按了Ctrl+w后全部松开再按其它的进行窗口任务

s	->	当前窗口水平分割，或者 :sp
v	->	当前窗口垂直分割，或者 :vs
n	->	新建窗口（默认：水平窗口）
:new 	->	创建水平窗口[文件名]
:q	->	退出当前窗口
c	->	关闭当前窗口
:only	->	保留其它窗口，只显示当前窗口
o	->	关闭其它窗口(只保留当前窗口)
p	->	来回切换两个窗口
R	->	当前窗口往上移
r	->	往下移
h	->	移动当前窗口到左边
j	->	～下边
k	->	～上边
l	->	～右边
+	->	让当前窗口一点点增加高度
-	->	～减小高度
=	->	所有窗口等宽/等高
:res+n	->	窗口高度=当前高 +/- n
:verticla res+/-n -> 窗口宽度=当前宽 +/- n
Ctrl + w->	窗口来回切换，会监听后续按键，所以反应比较慢
_	->	窗口最大化
1_	->	窗口最小化
1|	->	窗口向左最小化
|	->	窗口向右最大化
^	->	将缓冲区分割到一个窗口中
" ... 不说了够用了，还有H,J,K,L分别对应让窗口垂直或者水平显示

" 还有一个比较实用的是让所有内容等比例缩小与放大
Command+	放大  
Command-	缩小


# Tab
:tabnew	->	创建一个新的Tab[文件名]
:tabc	->	关闭当前Tab
:tabo	->	关闭其它Tab
:tabs	->	查看所有Tab，显示所有Tab信息以及Tab下的文件信息
:tabp	->	前一个Tab
:tabn	->	后一个Tab
```

### 至尊

1. 寄存器的使用：通过寄存器我们可以复制不同内容到不同寄存器中，然后通过不同寄存器中的内容进行粘贴操作
2. 宏（macro）
3. 补全

```vim
# 寄存器
"a yy	->	复制当前行到寄存器a中
"b yy	->	复制到b中，[a与b只是自定义的一个名字，名字自己随意取]
p	->	在不指定寄存器的时候默认粘贴最后一个复制的寄存器
"[寄存器名] p	粘贴指定寄存器内容

"+ yy	->	复制到系统剪切板，把复制的内容粘贴到系统中任意文本框中
"+ p	->	粘贴系统剪切板的内容
// 这里可以通过（零时/永久->编辑.vimrc）设置来直接把内容复制到系统剪切板或从系统剪切板粘贴到vim中
:set clipboard=unnamed

:register	查看当前系统中有哪些寄存器


# 宏: 举例，比如说想给下面的所有行添加双引号
123123123123123
234234234234234
345345345345345
456456456456456
567567567567567
678678678678678
789789789789789
方法1：
1. 进入normal模式：qw （此时编辑器提示你记录中）
2. 到任意一行按I添加" 再回normal模式按A添加"
3. 回到normal模式按q停止录制
4. 到任意一行没有双引号的地方按@w，此时哪一行就会添加上了双引号
5. 块添加双引号，Shift + v 选中你要添加双引号的块，然后:'<,'>normal @w
'<,'>这个是系统有的只需要输入normal @w 即可

方法2:
1. normal模式 qw
2. 到任意一行按I添加" 再回normal模式按A添加" 回normal 按j 进入下一行
3. 按q停止录制
4. 取需要双引号的地方按@w， 如果下面有十行需要添加双引号 按10@w

w	->	是宏的名字，你可以自己取其它的


# 代码补全: 常用的是头三个(有 | 的是或者， 没 | 的是要按两次)
Ctrl n | Ctrl p	->	补全单词
Ctrl x Ctrl f	->	补全文件名（当在文件中输入./路径的时候使用）
Ctrl x Ctrl o	->	代码补全（需开启文件类型检查，安装插件）

Ctrl x Ctrl n	->	缓冲区关键字
Ctrl x Ctrl i	->	包含文件关键字
Ctrl x Ctrl ]	->	标签文件关键字
Ctrl x Ctrl k	->	字典查找
Ctrl x Ctrl l	->	整行补全

Ctrl n		->	选中下一个
Ctrl p		->	选择上一个

:r! echo %	->	当前光标位置输出该文件名名称+类型
:r! echo %:p	->	输出该文件的绝对路径
```

### 补充终端的快捷键

```bash
Ctrl + h -> 删除光标前一个的字符（适用于Terminal）
Ctrl + w -> 删除光标前一个单词（适用于Terminal）
Ctrl + u -> 删除当前行（适用于Terminal），Ctrl + c 也可以清除当前行（如果当前窗口正在运行任务，这个快捷键会中断任务的运行）
Ctrl + a -> 光标移动到最前方
Ctrl + e -> 光标移动到最后面
Ctrl + k -> 清空屏幕所有信息，保留当前输入行,MAC 下可以 Ctrl + l 等效
Ctrl + f -> 光标向后移动一位
Ctrl + b -> 光标向前移动一位
Ctrl + y -> 粘贴之前被（Ctrl + u / w / k）删除的内容
```


---

### 学后感言

学习vim不为装逼，仅因为后期免不了与Linux打交道，所以提前预习，习惯vim的操作，避免后期既要学Linux，又要学vim，那脑子更吃不消了。 
