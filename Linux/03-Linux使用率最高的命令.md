# Linux使用率最高的命令

* [cd](#cd)
* [cp](#cp)
* [ls](#ls)
* [mv](#mv)
* [rm](#rm)
* [cat](#cat)
* [ssh](#ssh)
* [pwd](#pwd)
* [find](#find)
* [echo](#echo)
* [ping](#ping)
* [mkdir](#mkdir)
* [curl](#curl)
* [grep](#grep)
* [tail](#tail)
* [df](#df)
* [mount](#mount)
* [fdisk](#fdisk)
* [tftp](#tftp)
* [netstat](#netstat)

## cd

cd命令是”change directory”中单词的首字母缩写，其英文释义是改变目录，所以该命令的功能是从当前目录切换到指定目录。

其中目录的路径可分为绝对路径和相对路径。若目录名称省略，则切换至使用者的用户目录(也就是刚登录时所在的目录)。

另外，“~”也表示为用户目录的意思，“.”则是表示目前所在的目录，“..”则表示当前目录位置的上一级目录。

> 语法格式：cd `[参数]` `[目录名]`

| 参数 | 描述 |
|:------:|:------|
| -P | 如果切换的目标目录是一个符号链接，则直接切换到符号链接指向的目标目录 |
| -L | 如果切换的目标目录是一个符号链接，则直接切换到符号链接名所在的目录 |
| -- | 仅使用”-“选项时，当前目录将被切换到环境变量”OLDPWD”对应值的目录 |
| ~ | 切换至当前用户目录 |
| .. | 切换至当前目录位置的上一级目录 |

```bash
[root@192 Desktop]$ cd ~
[root@192 ~]$ pwd
/root
[root@192 ~]$ cd ..
[root@192 /]$ pwd
/
[root@192 /]$ cd /etc/
[root@192 etc]$ cd --
[root@192 ~]$ pwd
/root
[root@192 ~]$ cd -
/etc
[root@192 etc]$ 


```

## ls

ls 命令是Linux下最常用的指令之一。ls命令为英文单词 list 的缩写，正如英文单词 list 的意思，其功能是列出指定目录下的内容及其相关属性信息。

默认状态下，ls命令会列出当前目录的内容

> 语法格式: ls [选项] `[文件]`

| 参数 | 描述 |
|:------:|:------|
| -a | 显示所有文件及目录 (包括以“.”开头的隐藏文件) |
| -l | 使用长格式列出文件及目录信息 |
| -r | 将文件以相反次序显示(默认依英文字母次序) |
| -t | 根据最后的修改时间排序 |
| -A | 同 -a ，但不列出 “.” (当前目录) 及 “..” (父目录) |
| -S | 根据文件大小排序 |
| -R | 递归列出所有子目录 |

## cp

cp命令可以理解为英文单词copy的缩写，其功能为复制文件或目录。

cp命令可以将多个文件复制到一个具体的文件名或一个已经存在的目录下，也可以同时复制多个文件到一个指定的目录中。

> 语法格式：cp `[参数]` `[文件]`

| 参数 | 描述 |
|:------:|:------|
| -f | 若目标文件已存在，则会直接覆盖原文件 |
| -i | 若目标文件已存在，则会询问是否覆盖 |
| -p | 保留源文件或目录的所有属性 |
| -r | 递归复制文件和目录 |
| -d | 当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录 |
| -l | 对源文件建立硬连接，而非复制文件 |
| -s | 对源文件建立符号连接，而非复制文件 |
| -b | 覆盖已存在的文件目标前将目标文件备份 |
| -v | 详细显示cp命令执行的操作过程 |
| -a | 等价于“dpr”选项 |

## mv

mv命令是“move”单词的缩写，其功能大致和英文含义一样，可以移动文件或对其改名。

这是一个使用频率超高的文件管理命令，我们需要特别留意它与复制的区别：mv与cp的结果不同。mv命令好像文件“搬家”，文件名称发生改变，但个数并未增加。而cp命令是对文件进行复制操作，文件个数是有增加的。

> 语法格式：mv `[参数]`

| 参数 | 描述 |
|:------:|:------|
| -i | 若存在同名文件，则向用户询问是否覆盖 |
| -f | 覆盖已有文件时，不进行任何提示 |
| -b | 当文件存在时，覆盖前为其创建一个备份 |
| -u | 当源文件比目标文件新，或者目标文件不存在时，才执行移动此操作 |

## mkdir

mkdir命令是“make directories”的缩写，用来创建目录。

注意：默认状态下，如果要创建的目录已经存在，则提示已存在，而不会继续创建目录。 所以在创建目录时，应保证新建的目录与它所在目录下的文件没有重名。 mkdir命令还可以同时创建多个目录，是不是很强大呢？

> 语法格式 : mkdir `[参数]` `[目录]`

| 参数 | 描述 |
|:------:|:------|
| -p | 递归创建多级目录 |
| -m | 建立目录的同时设置目录的权限 |
| -z | 设置安全上下文 |
| -v | 显示目录的创建过程 |

```bash
# 在目录/usr/linuxcool下建立子目录dir，并且设置文件属主有读、写和执行权限，其他人无权访问
[root@192 Desktop]$ mkdir -m 700 /usr/linuxcool/dir
# 同时创建子目录dir1，dir2，dir3：
[root@192 Desktop]$ mkdir dir1 dir2 dir3
# 递归创建目录：
[root@192 ~]$ mkdir -p linuxcool/dir
```

## rm

rm是常用的命令，该命令的功能为删除一个目录中的一个或多个文件或目录，它也可以将某个目录及其下的所有文件及子目录均删除。对于链接文件，只是删除了链接，原有文件均保持不变。 rm也是一个危险的命令，使用的时候要特别当心，尤其对于新手，否则整个系统就会毁在这个命令（比如在/（根目录）下执行rm * -rf）。所以，我们在执行rm之前最好先确认一下在哪个目录，到底要删除什么东西，操作时保持高度清醒的头脑。

> 语法格式：rm `[参数]` `[文件]`

| 参数 | 描述 |
|:------:|:------|
| -f | 忽略不存在的文件，不会出现警告信息 |
| -i | 删除前会询问用户是否操作 |
| -r/R | 递归删除 |
| -v | 显示指令的详细执行过程 |

```bash
# 删除当前目录下所有文件：
[root@192 Desktop]$ rm -rf *
# 清空系统中所有的文件（谨慎）：
[root@192 ~]$ rm -rf /*
```

## pwd

pwd命令是“print working directory”中每个单词的首字母缩写，其功能正如所示单词一样，为打印工作目录，即显示当前工作目录的绝对路径。

在实际工作中，我们经常会在不同目录之间进行切换，为了防止“迷路”，我们可以使用pwd命令快速查看当前我们所在的目录路径。

> 语法格式: pwd `[参数]`

| 参数 | 描述 |
|:------:|:------|
| -L | 显示逻辑路径 |

## find

find命令可以根据给定的路径和表达式查找的文件或目录。find参数选项很多，并且支持正则，功能强大。和管道结合使用可以实现复杂的功能，是系统管理者和普通用户必须掌握的命令。

find如不加任何参数，表示查找当前路径下的所有文件和目录，如果服务器负载比较高尽量不要在高峰期使用find命令，find命令模糊搜索还是比较消耗系统资源的。

> 语法格式：find `[参数]` `[路径]` `[查找和搜索范围]`

| 参数 | 描述 |
|:------:|:------|
| -name | 按名称查找 |
| -size | 按大小查找 |
| -user | 按属性查找 |
| -type | 按类型查找 |
| -iname | 忽略大小写 |

```bash
# 使用-name参数查看/etc目录下面所有的.conf结尾的配置文件：
[root@192 Desktop]$ find /etc -name "*.conf"

# 使用-size参数查看/etc目录下面大于1M的文件：
[root@192 Desktop]$ find /etc -size +1M

# 查找当前用户主目录下的所有文件：
[root@192 Desktop]$ find $HOME -print

# 列出当前目录及子目录下所有文件和文件夹：
[root@192 Desktop]$ find .

# 搜索超过七天内被访问过的所有文件：
[root@192 Desktop]$ find . -type f -atime +7

# 搜索访问时间超过10分钟的所有文件：
[root@192 Desktop]$ find . -type f -amin +10

# 找出/home下不是以.txt结尾的文件：
[root@192 Desktop]$ find /home ! -name "*.txt"
```

## ssh

ssh命令是openssh套件中的客户端连接工具，可以给予ssh加密协议实现安全的远程登录服务器，实现对服务器的远程管理。

> 语法格式: ssh `[参数]` `[远程主机]`

| 参数 | 描述 |
|:------:|:------|
| -1 | 强制使用ssh协议版本1 |
| -2 | 强制使用ssh协议版本2 |
| -4 | 强制使用IPv4地址 |
| -6 | 强制使用IPv6地址 |
| -A | 开启认证代理连接转发功能 |
| -a | 关闭认证代理连接转发功能 |
| -b<IP地址> | 使用本机指定的地址作为对位连接的源IP地址 |
| -C | 请求压缩所有数据 |
| -F<配置文件> | 指定ssh指令的配置文件，默认的配置文件为“/etc/ssh/ssh_config” |
| -f | 后台执行ssh指令 |
| -g | 允许远程主机连接本机的转发端口 |
| -i<身份文件> | 指定身份文件（即私钥文件） |
| -l<登录名> | 指定连接远程服务器的登录用户名 |
| -N | 不执行远程指令 |
| -o<选项> | 指定配置选项 |
| -p<端口> | 指定远程服务器上的端口 |
| -q | 静默模式，所有的警告和诊断信息被禁止输出 |
| -X | 开启X11转发功能 |
| -x | 关闭X11转发功能 |
| -y | 开启信任X11转发功能 |

```bash
# 登录远程服务器：
[root@192 Desktop]$ ssh 202.102.240.88
# 用test用户连接远程服务器：
[root@192 Desktop]$ ssh -l test 202.102.220.88
# 等同于
[root@192 Desktop]$ ssh test@202.102.220.88
# 查看分区列表：
[root@192 Desktop]$ ssh 202.102.220.88 /sbin/fdisk -l
# 强制使用ssh协议版本1：
[root@192 Desktop]$ ssh -1
# 开启认证代理连接转发功能：
[root@192 Desktop]$ ssh -A
```

## cat

Linux系统中有很多个用于查看文件内容的命令，每个命令又都有自己的特点，比如这个cat命令就是用于查看内容较少的纯文本文件的。cat这个命令也很好记，因为cat在英语中是“猫”的意思，小猫咪是不是给您一种娇小、可爱的感觉呢？

注意：当文件内容较大时，文本内容会在屏幕上快速闪动（滚屏），用户往往看不清所显示的具体内容。因此对于较长文件内容可以按Ctrl+S键，停止滚屏；以及Ctrl+Q键可以恢复滚屏；而按Ctrl+C（中断）键则可以终止该命令的执行。或者对于大文件，干脆用more命令吧！

> 语法格式：cat `[参数]` `[文件]`

| 参数 | 描述 |
|:------:|:------|
| -n | 显示行数（空行也编号） |
| -s | 显示行数（多个空行算一个编号） |
| -b | 显示行数（空行不编号） |
| -E | 每行结束处显示$符号 |
| -T | 将TAB字符显示为 ^I符号 |
| -v | 使用 ^ 和 M- 引用，除了 LFD 和 TAB 之外 |
| -e | 等价于”-vE”组合 |
| -t | 等价于”-vT”组合 |
| -A | 等价于 -vET组合 |
| --help | 显示帮助信息 |
| --version | 显示版本信息 |

```bash
# 查看文件的内容：
[root@192 Desktop]$ cat filename.txt

# 查看文件的内容，并显示行数编号：
[root@192 Desktop]$ cat -n filename.txt

# 查看文件的内容，并添加行数编号后输出到另外一个文件中：
[root@192 Desktop]$ cat -n linuxcool.log > linuxprobe.log

# 清空文件的内容：
[root@192 Desktop]$ cat /dev/null > /root/filename.tx

# 持续写入文件内容，碰到EOF(当出现EOF时不会被写入文件中)符后结束并保存：
[root@192 Desktop]$ cat > filename.txt <<EOF
> Hello, World 
> Linux!
> EOF
[root@192 Desktop]$ cat -n filename.txt
# 1 Hello, World 
# 2 Linux!

# 将软盘设备制作成镜像文件：
[root@192 Desktop]$ cat /dev/fd0 > fdisk.iso
```

## echo

echo命令用于在终端设备上输出字符串或变量提取后的值，这是在Linux系统中最常用的几个命令之一，但操作却非常简单。

人们一般使用在变量前加上$符号的方式提取出变量的值，例如：$PATH，然后再用echo命令予以输出。或者直接使用echo命令输出一段字符串到屏幕上，起到给用户提示的作用。

> 语法格式：echo `[参数]` `[字符串]`

| 参数 | 描述 |
|:------:|:------|
| -n | 不输出结尾的换行符 |
| -e "\a" | 发出警告音 |
| -e "\b" | 删除前面的一个字符 |
| -e "\c" | 结尾不加换行符 |
| -e "\f" | 换行，光标扔停留在原来的坐标位置 |
| -e "\n" | 换行，光标移至行首 |
| -e "\r" | 光标移至行首，但不换行 |
| -E | 禁止反斜杠转移，与-e参数功能相反 |
| —version | 查看版本信息 |
| --help | 查看帮助信息 |

```bash
# 对内容进行转义，不让$符号的提取变量值功能生效：
[root@192 Desktop]$ echo \$PATH
# $PATH

# 使用反引号符执行命令，并输出其结果到终端：
[root@192 Desktop]$ echo `date`
# Sun Mar 20 22:47:32 CST 2022

# 输出带有换行符的内容：
[root@192 Desktop]$ echo -e "a\nb\nc"
# a
# b
# c

# 输出信息中删除某个字符，注意看数字3消失了：
[root@192 Desktop]$ echo -e "123\b456" 
# 12456

# 输出的信息中带上警告音
[root@192 Desktop]$ echo -e "\a123456"
# 123456
```

## ping

ping命令主要用来测试主机之间网络的连通性，也可以用于。执行ping指令会使用ICMP传输协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。

不过值得我们注意的是：Linux系统下的ping命令与Windows系统下的ping命令稍有不同。Windows下运行ping命令一般会发出4个请求就结束运行该命令；而Linux下不会自动终止，此时需要我们按CTR+C终止或者使用-c参数为ping命令指定发送的请求数目。

> 语法格式：ping `[参数]` `[目标主机]`

| 参数 | 描述 |
|:------:|:------|
| -d | 使用Socket的SO_DEBUG功能 |
| -c | 指定发送报文的次数 |
| -i | 指定收发信息的间隔时间 |
| -I | 使用指定的网络接口送出数据包 |
| -l | 设置在送出要求信息之前，先行发出的数据包 |
| -n | 只输出数值 |
| -p | 设置填满数据包的范本样式 |
| -q | 不显示指令执行过程 |
| -R | 记录路由过程 |
| -s | 设置数据包的大小 |
| -t | 设置存活数值TTL的大小 |
| -v | 详细显示指令的执行过程 |

```bash
# 连续ping4次：
[root@192 Desktop]$ ping -c 4 www.linuxcool.com 

# 设置次数为4，时间间隔为3秒：
[root@192 Desktop]$ ping -c 4 -i 3 www.linuxcool.com

# 利用ping命令获取指定网站的IP地址：
[root@192 Desktop]$ ping -c 1 linuxcool.com | grep from | cut -d " " -f 4
```

## curl

curl命令是一个利用URL规则在shell终端命令行下工作的文件传输工具；它支持文件的上传和下载，所以是综合传输工具，但按传统，习惯称curl为下载工具。

作为一款强力工具，curl支持包括HTTP、HTTPS、ftp等众多协议，还支持POST、cookies、认证、从指定偏移处下载部分文件、用户代理字符串、限速、文件大小、进度条等特征；做网页处理流程和数据检索自动化。

> 语法格式：curl `[参数]` `[网址]`

| 参数 | 描述 |
|:------:|:------|
| -O | 把输出写到该文件中，保留远程文件的文件名 |
| -u | 通过服务端配置的用户名和密码授权访问 |

```bash
# 将下载的数据写入到文件，必须使用文件的绝对地址：
[root@192 Desktop]$ curl https://www.linuxcool.com/abc.txt --silent -O

# 访问需要授权的页面时，可通过-u选项提供用户名和密码进行授权：
[root@192 Desktop]$ curl -u root https://www.linuxprobe.com/
# Enter host password for user 'root':
```

## grep

grep是“global search regular expression and print out the line”的简称，意思是全面搜索正则表达式，并将其打印出来。这个命令可以结合正则表达式使用，它也是linux使用最为广泛的命令。

grep命令的选项用于对搜索过程的补充，而其命令的模式十分灵活，可以是变量、字符串、正则表达式。需要注意的是：一当模式中包含了空格，务必要用双引号将其引起来。

linux系统支持三种形式的grep命令，大儿子就是grep，标准，模仿的代表。二儿子兴趣爱好多-egrep，简称扩展grep命令，其实和grep -E等价，支持基本和扩展的正则表达式。小儿子跑的最快-fgrep，简称快速grep命令，其实和grep -F等价，不支持正则表达式，按照字符串表面意思进行匹配。

> 语法格式： grep `[参数]`

| 参数 | 描述 |
|:------:|:------|
| -i | 搜索时，忽略大小写 |
| -c | 只输出匹配行的数量 |
| -l | 只列出符合匹配的文件名，不列出具体的匹配行 |
| -n | 列出所有的匹配行，显示行号 |
| -h | 查询多文件时不显示文件名 |
| -s | 不显示不存在、没有匹配文本的错误信息 |
| -v | 显示不包含匹配文本的所有行 |
| -w | 匹配整词 |
| -x | 匹配整行 |
| -r | 递归搜索 |
| -q | 禁止输出任何结果，已退出状态表示搜索是否成功 |
| -b | 打印匹配行距文件头部的偏移量，以字节为单位 |
| -o | 与-b结合使用，打印匹配的词据文件头部的偏移量，以字节为单位 |

```bash
# 支持多文件查询并支持使用通配符：
[root@192 Desktop]$ grep zwx file_* /etc/hosts
# file_1:zwx
# file_1:zwx
# file_1:zwxddkjflkdjfdlkfjlsdkj
# file_2:zwx
# file_4:dkfjlzwxejfkje
# file_4:zwx djfkdjf
# file_4:zwxedkfgj

# 输出匹配字符串行的数量：
[root@192 Desktop]$ grep -c zwx file_*
# file_1:2
# file_2:1
# file_3:0

# 列出所有的匹配行，并显示行号：
[root@192 Desktop]$ grep -n zwx file_*
# file_1:1:zwx
# file_1:4:zwx
# file_1:10:zwxddkjflkdjfdlkfjlsdkj
# file_2:2:zwx
# file_4:3:dkfjlzwxejfkje
# file_4:4:zwx djfkdjf
# file_4:5:zwxedkfgj

# 显示不包含模式的所有行：
[root@192 Desktop]$ grep -vc zwx file_*
# file_1:7                                
# file_2:4
# file_3:5
# file_4:2

# 不再显示文件名：
[root@192 Desktop]$ grep -h zwx file_*
# zwx
# zwx
# zwxddkjflkdjfdlkfjlsdkj
# zwx
# dkfjlzwxejfkje
# zwx djfkdjf
# zwxedkfgj

# 只列出符合匹配的文件名，不列出具体匹配的行：
[root@192 Desktop]$ grep -l zwx file_*
# file_1
# file_2
# file_4

# 不显示不存在或无匹配的文本信息：
[root@192 Desktop]$ grep  -s zwx file1 file_1
# file_1:zwx       
# file_1:zwx
# file_1:zwxddkjflkdjfdlkfjlsdkj
# [root@linuxcool ~]# grep zwx file1 file_1
# grep: file1: No such file or directory  
# file_1:zwx
# file_1:zwx
# file_1:zwxddkjflkdjfdlkfjlsdkj

# 递归搜索，不仅搜索当前目录，还搜索子目录：
[root@192 Desktop]$ grep -r zwx file_2 *
# file_2:zwx
# anaconda-ks.cfg:user --name=zwx --gecos="zwx"
# file_1:zwx
# file_1:zwx
# file_1:zwxddkjflkdjfdlkfjlsdkj
# file_2:zwx
# file_4:dkfjlzwxejfkje
# file_4:zwx djfkdjf
# file_4:zwxedkfgj
# initial-setup-ks.cfg:user --name=zwx --gecos="zwx"
 
# 匹配整词，以字面意思去解释他，相当于精确匹配：
[root@192 Desktop]$ grep zw* file_1
# zwx                       
# zwx
# zdkfjeld
# zw
# ze
# zwxddkjflkdjfdlkfjlsdkj
# [root@linuxcool ~]# grep -w zw* file_1
# zw

# 匹配整行，文件中的整行与模式匹配时，才打印出来：
[root@192 Desktop]$ grep -x zwx file_*
# file_1:zwx
# file_1:zwx
# file_2:zwx

# 查找一个文件中的空行和非空行：
[root@192 Desktop]$ grep -c ^$ file_1
# 4
[root@192 Desktop]$ grep -c ^[^$] file_1
# 15

# 匹配任意或重复字符用“.”或“*”符号来实现：
[root@192 Desktop]$ grep ^z.x file_1
# zwx
# zwx
# zwxddkjflkdjfdlkfjlsdkj
[root@192 Desktop]$ grep ^z* file_6
# zwx
# dfkjd
#                      
# zzdfjkd
# zz dfdww
# haha
```

## tail

tail用于显示文件尾部的内容，默认在屏幕上显示指定文件的末尾10行。如果给定的文件不止一个，则在显示的每个文件前面加一个文件名标题。如果没有指定文件或者文件名为“-”，则读取标准输入。

> 语法格式：tail `[参数]`

| 参数 | 描述 |
|:-----:|:-----|
| --retry | 即是在tail命令启动时，文件不可访问或者文件稍后变得不可访问，都始终尝试打开文件。使用此选项时需要与选项“——follow=name”连用 |
| -c\<N>或——bytes=\<N> | 输出文件尾部的N（N为整数）个字节内容 |
| -f<name/descriptor> | --follow\<nameldescript>：显示文件最新追加的内容 |
| -F | 与选项“-follow=name”和“--retry”连用时功能相同 |
| -n\<N>或——line=\<N> | 输出文件的尾部N（N位数字）行内容 |
| --pid=<进程号> | 与“-f”选项连用，当指定的进程号的进程终止后，自动退出tail命令 |
| --help | 显示指令的帮助信息 |
| --version | 显示指令的版本信息 |

```bash
# 显示文件file的最后10行：
[root@192 Desktop]$ tail file
 
# 显示文件file的内容，从第20行至文件末尾：
[root@192 Desktop]$ tail +20 file 
 
# 显示文件file的最后10个字符：
[root@192 Desktop]$ tail -c 10 file 
 
# 一直变化的文件总是显示后10行：
[root@192 Desktop]$ tail -f 10 file
```

## df

df命令的英文全称即“Disk Free”，顾名思义功能是用于显示系统上可使用的磁盘空间。默认显示单位为KB，建议使用“df -h”的参数组合，根据磁盘容量自动变换合适的单位，更利于阅读。

日常普遍用该命令可以查看磁盘被占用了多少空间、还剩多少空间等信息。

> 语法格式： df `[参数]` `[指定文件]`

| 参数 | 描述 |
|:-----:|:-----|
| -a | 显示所有系统文件 |
| -B  | <块大小>	指定显示时的块大小 |
| -h | 以容易阅读的方式显示 |
| -H | 以1000字节为换算单位来显示 |
| -i | 显示索引字节信息 |
| -k | 指定块大小为1KB |
| -l | 只显示本地文件系统 |
| -t<文件系统类型> | 	只显示指定类型的文件系统 |
| -T | 输出时显示文件系统类型 |
| -- -sync | 在取得磁盘使用信息前，先执行sync命令 |

```bash
# 
[root@192 Desktop]$ df
Filesystem              1K-blocks    Used Available Use% Mounted on
devtmpfs                   996944       0    996944   0% /dev
tmpfs                     1013968       0   1013968   0% /dev/shm
tmpfs                     1013968   10716   1003252   2% /run
tmpfs                     1013968       0   1013968   0% /sys/fs/cgroup
/dev/mapper/centos-root  18360320 5293512  13066808  29% /
/dev/sda1                  496292  166344    329948  34% /boot
tmpfs                      202796       4    202792   1% /run/user/42
tmpfs                      202796      48    202748   1% /run/user/0
/dev/sr0                  4554702 4554702         0 100% /run/media/root/CentOS 7 x86_64

# 以容易阅读的方式显示磁盘分区使用情况：
[root@192 Desktop]$ 
Filesystem               Size  Used Avail Use% Mounted on
devtmpfs                 974M     0  974M   0% /dev
tmpfs                    991M     0  991M   0% /dev/shm
tmpfs                    991M   11M  980M   2% /run
tmpfs                    991M     0  991M   0% /sys/fs/cgroup
/dev/mapper/centos-root   18G  5.1G   13G  29% /
/dev/sda1                485M  163M  323M  34% /boot
tmpfs                    199M  4.0K  199M   1% /run/user/42
tmpfs                    199M   48K  198M   1% /run/user/0
/dev/sr0                 4.4G  4.4G     0 100% /run/media/root/CentOS 7 x86_64

# 显示指定文件所在分区的磁盘使用情况：
[root@192 Desktop]$ df /etc/dhcp
Filesystem              1K-blocks    Used Available Use% Mounted on
/dev/mapper/centos-root  18360320 5293536  13066784  29% /

# 显示文件类型为ext4的磁盘使用情况：
[root@192 Desktop]$ df -t ext4
文件系统        1K-块   已用   可用    已用% 挂载点
/dev/sda1      999320 128264 802244   14% /boot
```

## mount

mount命令用于加载文件系统到指定的加载点。此命令的最常用于挂载cdrom，使我们可以访问cdrom中的数据，因为你将光盘插入cdrom中，Linux并不会自动挂载，必须使用Linux mount命令来手动完成挂载。

> 语法格式：mount `[参数]`

| 参数 | 描述 |
|:-----:|:-----|
| -t | 指定挂载类型 |
| -l | 显示已加载的文件系统列表 |
| -h | 显示帮助信息并退出 |
| -V | 显示程序版本 |
| -n | 加载没有写入文件“/etc/mtab”中的文件系统 |
| -r | 将文件系统加载为只读模式 |
| -a | 加载文件“/etc/fstab”中描述的所有文件系统 |

```bash
# 启动所有挂载：
[root@192 Desktop]$ mount -a
 
# 挂载 /dev/cdrom 到 /mnt：
[root@192 Desktop]$ mount /dev/cdrom /mnt
 
# 挂载nfs格式文件系统：
[root@192 Desktop]$ mount -t nfs /123 /mnt  

# 挂载第一块盘的第一个分区到/etc目录 ：
[root@192 Desktop]$ mount -t ext4 -o loop,default /dev/sda1 /etc
```

## fdisk

fdisk命令的英文全称是“Partition table manipulator for Linux”，即作为磁盘的分区工具。进行硬盘分区从实质上说就是对硬盘的一种格式化， 用一个形象的比喻，分区就好比在一张白纸上画一个大方框，而格式化好比在方框里打上格子。

> 语法格式：fdisk `[参数]`

| 参数 | 描述 |
|:-----:|:-----|
| -b | 指定每个分区的大小 |
| -l | 列出指定的外围设备的分区表状况 |
| -s | 将指定的分区大小输出到标准输出上，单位为区块 |
| -u | 搭配”-l”参数列表，会用分区数目取代柱面数目，来表示每个分区的起始地址 |
| -v | 显示版本信息 |

```bash
# 查看所有分区情况：
[root@192 Desktop]$ fdisk -l
 
# 选择分区磁盘：
[root@192 Desktop]$ fdisk /dev/sdb
 
# 在当前磁盘上建立扩展分区：
[root@192 Desktop]$ fdisk /ext
 
# 不检查磁盘表面加快分区操作：
[root@192 Desktop]$ fdisk /actok
 
# 重建主引导记录：
[root@192 Desktop]$ fdisk /cmbr 
```

## tftp

tftp命令用于传输文件。ftp让用户得以下载存放于远端主机的文件，也能将文件上传到远端主机放置。

tftp是简单的文字模式ftp程序，它所使用的指令和ftp类似。

> 语法格式：tftp `[参数]`

| 参数 | 描述 |
|:-----:|:-----|
| connect | 连接到远程tftp服务器 |
| mode | 文件传输模式 |
| put | 上传文件 |
| get | 下载文件 |
| quit | 退出 |
| verbose | 显示详细的处理信息 |
| trace | 显示包路径 |
| status | 显示当前状态信息 |
| binary | 二进制传输模式 |
| ascii | ascii 传送模式 |
| rexmt | 设置包传输的超时时间 |
| timeout | 设置重传的超时时间 |
| help | 帮助信息 |
| ? | 帮助信息 |

```bash
# 连接远程服务器”218.28.188.288″：
[root@192 Desktop]$ tftp 218.28.188.288 
 
# 远程下载file文件：
tftp> get file                            
# getting from 218.28.188.288 to /dir  
# Recived 168236 bytes in 1.5 seconds[112157 bit/s] 
 
# 退出tftp：
tftp> quit
```

## netstat

netstat 命令用于显示各种网络相关信息，如网络连接，路由表，接口状态 (Interface Statistics)，masquerade 连接，多播成员 (Multicast Memberships) 等等。

从整体上看，netstat的输出结果可以分为两个部分：一个是Active Internet connections，称为有源TCP连接，其中”Recv-Q”和”Send-Q”指%0A的是接收队列和发送队列。这些数字一般都应该是0。如果不是则表示软件包正在队列中堆积。这种情况只能在非常少的情况见到；另一个是Active UNIX domain sockets，称为有源Unix域套接口(和网络套接字一样，但是只能用于本机通信，性能可以提高一倍)。

> 语法格式：netstat `[参数]`

| 参数 | 描述 |
|:-----:|:-----|
| -a | 显示所有连线中的Socket |
| -p | 显示正在使用Socket的程序识别码和程序名称 |
| -u | 显示UDP传输协议的连线状况 |
| -i | 显示网络界面信息表单 |
| -n | 直接使用IP地址，不通过域名服务器 |

```bash
# 显示详细的网络状况：
[root@192 Desktop]$ netstat -a
 
# 显示当前户籍UDP连接状况：
[root@192 Desktop]$ netstat -nu
 
# 显示UDP端口号的使用情况：
[root@192 Desktop]$ netstat -apu 
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address  Foreign Address  State  PID/Program name    
udp        0      0 0.0.0.0:bootpc          0.0.0.0:*      4000/dhclient       
udp        0      0 localhost:323           0.0.0.0:*      3725/chronyd        
udp6       0      0 localhost:323           [::]:*         3725/chronyd

# 显示网卡列表：
[root@192 Desktop]$ netstat -i 
Kernel Interface table 
Iface MTU Met  RX-OK  RX-ERR  RX-DRP RX-OVR  TX-OK TX-ERR TX-DRP TX-OVR Flg 
eth0 1500   0  181864   0      0       0     141278   0     0     0    BMRU 
lo   16436  0   3362    0      0       0     3362     0     0     0    LRU

# 显示组播组的关系：
[root@192 Desktop]$ netstat -g 
IPv6/IPv4 Group Memberships Interface    
RefCnt Group 
--------------- ------ --------------------- 
lo        1   ALL-SYSTEMS.MCAST.NET 
eth0      1   ALL-SYSTEMS.MCAST.NET lo       1   ff02::1 
eth0      1   ff02::1:ff0a:b0c eth0          1   ff02::1
```

> 以上信息收集自 [Linux命令大全](https://www.linuxcool.com/)