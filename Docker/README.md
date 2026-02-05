# Docker 学习笔记

Docker.desktop 4.59.0
Docker 当前版本
```shell
docker --version
Docker version 29.2.0, build 0b9d198
```


| 快速跳转对应位置                                    | -                           | -                          | -                                | -                                |
|---------------------------------------------|-----------------------------|----------------------------|----------------------------------|----------------------------------|
| [run 镜像运行](#run)                            | [name 指定名字](#name)          | [exec 执行命令](#exec)         | [ps 列出容器](#ps)                   | [build 构建镜像](#build)             |
| [bake 批量构建](#bake)                          | [pull 镜像拉取](#pull)          | [push 推送镜像](#push)         | [images 列出镜像](#images)           | [login 仓库登录](#login)             |
| [logout 仓库登出](#logout)                      | [search 搜索镜像](#search)      | [version 版本信息](#version)   | [info 系统信息](#info)               | [create 创建容器](#create)           |
| [start 启动容器](#start)                        | [stop 停止容器](#stop)          | [restart 重启容器](#restart)   | [kill 强制终止容器](#kill)             | [rm 删除容器](#rm)                   |
| [pause-unpause 冻结/恢复进程](#pause-unpause)     | [commit 容器→新镜像](#commit)    | [tag 镜像打标签](#tag)          | [rmi 删除镜像](#rmi)                 | [save/load 镜像归档/加载](#save-load)  |
| [export-import 容器文件系统导出/导入](#export-import) | [history 查看镜像构建层](#history) | [diff 检查容器文件变更](#diff)     | [cp 容器↔主机文件传输](#cp)              | [logs 查看容器日志](#logs)             |
| [inspect 查看对象底层详情](#inspect)                | [port 查看端口映射](#port)        | [top 容器内进程列表](#top)        | [stats 实时资源监控](#stats)           | [wait 等待容器退出](#wait)             |
| [rename 重命名容器](#rename)                     | [update 动态调整资源](#update)    | [attach 附加到容器主进程](#attach) | [events 实时事件流](#events)          | [config 客户端配置目录](#config)        |
| [c,context 上下文名称](#c-context)               | [D,debug 启用调试模式](#D-debug)  | [H,host 守护进程地址](#H-host)   | [l,log-level 日志级别](#l-log-level) | [tls 启用 TLS](#tls)               |
| [tlscacert CA 证书路径](#tlscacert)             | [tlscert 客户端证书](#tlscert)   | [tlskey 客户端私钥](#tlskey)    | [events 实时事件流](#events)          | [tlsverify TLS + 验证](#tlsverify) |

## 添加镜像
[改用国内镜像](./mirrors.md)

## 常用命令

<a id="run"></a>
### `run` 镜像运行  
基于指定镜像创建并启动新容器（自动拉取镜像、映射端口、挂载卷等），是启动服务最常用命令
```shell
# docker run [名字/ID]
docker run nginx
# 如果本地不存在 nginx 镜像
# docker 将默认执行 docker pull nginx && docker run nginx
```
<a id="name"></a>
### `--name` 指定名字

没有指定名字的容器，每次 run 都会创建一个新的容器

```shell
docker run --name my_nginx nginx
# /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
# /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
# ...
# 2026/02/05 12:02:15 [notice] 1#1: start worker process 37
```


<a id="exec"></a>
### `exec` 执行命令  
在已运行的容器内执行额外命令（如 docker exec -it 容器名 /bin/bash 进入交互式终端）

<a id="ps"></a>
### `ps` 列出容器  
显示当前运行中的容器；加 -a 可查看所有容器（含已停止）
```shell
# ps -> process status (进程状态)的缩写
docker ps
# 执行结果
# CONTAINER ID   IMAGE     COMMAND                   CREATED          STATUS          PORTS     NAMES
# 1b81e8de81e0   nginx     "/docker-entrypoint.…"   17 seconds ago   Up 16 seconds   80/tcp    epic_cori
``` 

<a id="build"></a>
### `build` 构建镜像  
通过本地 Dockerfile 和构建上下文生成新镜像（-t 指定名称，-f 指定文件）

<a id="bake"></a>
### `bake` 批量构建  
Docker Buildx 高级命令，通过 HCL/JSON/Compose 配置文件定义多目标、多平台构建任务（适合 CI/CD）

<a id="pull"></a>
### `pull` 镜像拉取  
从远程仓库（如 Docker Hub）下载镜像到本地

```shell
docker pull nginx
```

<a id="push"></a>
### `push` 推送镜像	  
将本地镜像上传至仓库（需先 login 认证，常用于分享或部署）

<a id="images"></a>
### `images` 列出镜像  
显示本地所有已下载镜像以及删除镜像
```shell
docker images
# 执行结果
# IMAGE                     ID             DISK USAGE   CONTENT SIZE   EXTRA
# mysql:latest              932fe8fbc04c       1.27GB          283MB    U
# nginx:latest              9dd288848f44        240MB         65.7MB    U
# nginx:stable-alpine3.23   52e3ada4d978         93MB         26.8MB

# 删除镜像
# rmi -> remove image
docker rmi 52e3ada4d978
# 执行结果
# Untagged: nginx:stable-alpine3.23
# Deleted: sha256:52e3ada4d978443601f286cc2f9e7b95c82aa3ad5a78ce9c6b94ce00258e68cc
```

<a id="login"></a>
### `login` 仓库登录  
认证登录 Docker 仓库（如 docker login hub.docker.com），用于拉取私有镜像或推送

<a id="logout"></a>
### `logout` 仓库登出  
退出当前仓库认证会话，清除本地凭证

<a id="search"></a>
### `search` 搜索镜像  
在 Docker Hub 按关键词搜索公开镜像（如 docker search nginx）

```shell
docker search nginx
# NAME                                     DESCRIPTION                                     STARS     OFFICIAL
# nginx                                    Official build of Nginx.                        21173     [OK]
# ...
# corpusops/nginx                          https://github.com/corpusops/docker-images/     1
```

<a id="version"></a>
### `version` 版本信息	  
显示 Docker 客户端与服务端版本、API 版本等

```shell
docker version
# Client:
#  Version:           29.2.0
# ...
#  docker-init:
#   Version:          0.19.0
#   GitCommit:        de40ad0
```
> 与 docker --version（显示客户端）不同

<a id="info"></a>
### `info` 系统信息	  
输出 Docker 全局配置：存储驱动、内核版本、容器/镜像数量、资源限制等（用于诊断）

```shell
docker info
# Client:
#  Version:    29.2.0
#  Context:    desktop-linux
#  Debug Mode: false
# ...
#  Firewall Backend: iptables
```

## 容器生命周期命令

<a id="create"></a>
### `create` 创建容器（不启动）	  
如果不指定 `--name` 将返回一个容器的 id，容器名称随机
```shell
# 创建一个 nginx 的容器
docker create nginx
# b9172bd778046c4381d36add64a047bb6ca1c2e214a218b7d10962ca0ea3a8a5
```
与 run 区别：仅创建，需配合 start 启动；适合预配置场景

<a id="start"></a>
### `start` 启动容器	  

```shell
# 启动一个名为 b9172bd778046c438 的容器
docker start b9172bd778046c438

# 或者
docker create --name my-nginx nginx
docker start my-nginx
```

<a id="stop"></a>
### `stop` 启动容器	  

```shell
# 停止一个名为 b9172bd778046c438 的容器
docker stop b9172bd778046c438
```

<a id="restart"></a>
### `restart` 重启容器	  

```shell
# 重启一个名为 b9172bd778046c438 的容器
docker restart b9172bd778046c438
```

<a id="kill"></a>
### `kill` 强制终止容器	  

```shell
# 终止一个名为 b9172bd778046c438 的容器
docker kill b9172bd778046c438
```
立即发送信号（默认 SIGKILL），进程无清理机会；慎用

<a id="rm"></a>
### `rm` 删除容器 [点击查看详细参数](./docker-run.md#rm)	  

```shell
# 删除一个名为 b9172bd778046c438 的容器
docker rm -f -v b9172bd778046c438
```
`-f` 强制删运行中容器，`-v` 同时删关联卷；**数据不可恢复！**

<a id="pause-unpause"></a>
### `pause/unpause` 冻结/恢复进程	  

```shell
# 冻结一个名为 b9172bd778046c438 的容器
docker pause b9172bd778046c438

# 恢复
docker unpause b9172bd778046c438
```

## 镜像与文件系统操作

<a id="commit"></a>
### `commit` 容器→新镜像	  

```shell
docker commit -m "fix" my-nginx myimage:v2
```
**不推荐生产使用：** 丢失构建历史、含临时数据、难审计；优先用 Dockerfile

<a id="tag"></a>
### `tag` 镜像打标签	  

```shell
docker tag myimage:v1 registry/user/app:latest
```
仅创建引用（不复制层），推送前必备步骤

<a id="rmi"></a>
### `rmi` 删除镜像	  

```shell
docker rmi $(docker images -f "dangling=true" -q)
```
被容器引用时需先删容器；`-f` 强制删除

<a id="save-load"></a>
### `save/load` 镜像归档/加载	  

```shell
docker save myimg:tag
```
立即发送信号（默认 SIGKILL），进程无清理机会；慎用

<a id="export-import"></a>
### `export/import` 容器文件系统导出/导入	  

```shell
# 导出
docker export myapp > fs.tar
# 导入
docker import fs.tar newimg
```
仅文件系统快照（单层），无历史、无CMD；与 save/load 本质不同

<a id="history"></a>
### `history` 查看镜像构建层	  

```shell
docker history --no-trunc myimg
```
分析镜像大小、排查敏感信息残留；`--human=false` 显示精确大小

<a id="diff"></a>
### `diff` 检查容器文件变更	  

```shell
docker diff my-nginx
# C /var
# C /var/cache
# C /var/cache/nginx
# A /var/cache/nginx/scgi_temp
# A /var/cache/nginx/uwsgi_temp
# A /var/cache/nginx/client_temp
# A /var/cache/nginx/fastcgi_temp
# A /var/cache/nginx/proxy_temp
# C /etc
# C /etc/nginx
# C /etc/nginx/conf.d
# C /etc/nginx/conf.d/default.conf
# C /run
# A /run/nginx.pid

# 查找被修改的文件
docker diff my-nginx | grep "C"
```
输出：A=新增, D=删除, C=修改；辅助调试容器内改动

## 数据与日志交互

<a id="cp"></a>
### `cp` 容器↔主机文件传输	  

```shell
docker cp ./data myapp:/app/data
docker cp myapp:/logs ./host_logs
```
容器可停止；路径用绝对路径；支持 -（STDIN/STDOUT）

<a id="logs"></a>
### `logs` 查看容器日志	  

```shell
docker logs -f --tail 100 myapp
```
`-f` 实时跟踪，`--tail` 限制行数；日志驱动影响可用性（如 journald）

<a id="inspect"></a>
### `inspect` 查看对象底层详情	  

```shell
docker inspect --format='{{.NetworkSettings.IPAddress}}' myapp
```
JSON 输出；配合 jq 或 `--format` 提取关键字段；调试网络/挂载必备

<a id="port"></a>
### `port` 查看端口映射	  

```shell
docker port myapp 80
```
仅对运行中容器有效；显示 主机IP:主机端口 -> 容器端口

<a id="top"></a>
### `top` 容器内进程列表	  

```shell
docker top myapp aux
```
依赖容器内 ps 命令；显示容器命名空间内进程（非宿主机全局）

<a id="stats"></a>
### `stats` 实时资源监控	  

```shell
docker stats --no-stream myapp
```
	显示 CPU、内存、网络、IO；--no-stream 仅输出一次（适合脚本）

<a id="wait"></a>
### `wait` 等待容器退出	  

```shell
exit_code=$(docker wait myapp)
```
阻塞执行，返回退出码；`CI/CD` 中判断任务是否成功

<a id="rename"></a>
### `rename` 重命名容器	  

```shell
docker rename old_name new_name
```
容器运行/停止均可；新名称需唯一

<a id="update"></a>
### `update` 动态调整资源	  

```shell
docker update --cpus 1.5 --memory 512m myapp
```
部分参数需重启生效；依赖内核 cgroups 支持


## 系统与事件监控

<a id="attach"></a>
### `attach` 附加到容器主进程	  

```shell
docker attach myapp
```
退出风险：`Ctrl+C` 会终止容器主进程！安全退出：`Ctrl+P+Q`

<a id="events"></a>
### `events` 实时事件流		  

```shell
docker events --filter 'event=start'
```
持续输出（Ctrl+C 停止）；可过滤事件类型、容器、时间范围；运维监控基础

## 全局选项详解

<a id="config"></a>
### `--config` 客户端配置目录		  
指定自定义配置路径（含 config.json、证书等）

```shell
docker --config /custom/path ps
```
• 路径需存在且权限正确
• Windows 注意转义：C:/custom/docker（推荐正斜杠）

<a id="c-context"></a>
### `-c, --context` 上下文名称		  
临时切换 Docker 环境（覆盖 DOCKER_HOST 与默认上下文）

```shell
docker -c remote-swarm ps
```
上下文需预先创建：docker context create ...  
优先级：命令行 > 环境变量 > 默认上下文

<a id="D-debug"></a>
### `-D, --debug` 启用调试模式		  
输出完整调试日志（含 API 调用、TLS 握手等）
```shell
docker -D build .
```
敏感信息风险：日志可能含令牌、密钥  
生产环境禁用；建议重定向：2> debug.log

<a id="H-host"></a>
### `-H, --host` 守护进程地址  
指定连接的 Docker Daemon 套接字（临时覆盖）

```shell
docker -H tcp://192.168.1.100:2375 ps
```
格式：
`unix:///var/run/docker.sock`（Linux）  
`npipe:////./pipe/docker_engine`（Windows）  
**安全警告：** 非 TLS 的 TCP 连接极度危险！

<a id="l-log-level"></a>
### `-l, --log-level` 日志级别	 
控制客户端输出详细程度（debug/info/warn/error/fatal）

```shell
docker --log-level error run nginx
```
与 -D 区别：-D 强制设为 debug 且启用额外调试逻辑  
默认 info，排查问题时临时调至 debug

<a id="tls"></a>
### `--tls` 启用 TLS  
开启 TLS 加密通信（不验证证书）

```shell
docker --tls -H tcp://remote:2376 ps
```
不验证服务器身份，存在中间人攻击风险  
通常与 `--tlsverify` 联用

<a id="tlscacert"></a>
### `--tlscacert` CA 证书路径  
指定信任的根证书（验证服务器证书链）

```shell
--tlscacert ./ca.pem
```
默认：~/.docker/ca.pem  
证书需 PEM 格式，路径含空格需引号包裹

<a id="tlscert"></a>
### `--tlscert` 客户端证书  
提供客户端身份认证证书

```shell
--tlscert ./cert.pem
```
需与 --tlskey 配对使用  
证书需由服务器信任的 CA 签发

<a id="tlskey"></a>
### `--tlskey` 客户端私钥  
提供 TLS 通信私钥

```shell
--tlskey ./key.pem
```
权限严格：Linux 建议 chmod 600 key.pem
切勿提交至代码仓库！

<a id="events"></a>
### `events` 实时事件流		  

```shell
docker events --filter 'event=start'
```
持续输出（Ctrl+C 停止）；可过滤事件类型、容器、时间范围；运维监控基础

<a id="tlsverify"></a>
### `tlsverify` TLS + 验证		
启用 TLS 并强制验证服务器证书

```shell
docker --tlsverify --tlscacert ca.pem -H ...
```
安全最佳实践：远程连接必须启用  
未提供 --tlscacert 时使用系统 CA 存储



* 分离模式，后台执行，不占用当前的命令行窗口
```shell
# -d -> detached mode
docker run -d nginx
# 执行结果
# 1b81e8de81e0ece00a6b5e0d5448eff23d130ac185cbd81e2d555a3b5213fd7b
```

* 绑定容器端口

Docker 本机网络和容器网络是隔离状态的
```shell
# -p -> 本机网络：容器网络
# 等同于访问本机80端口会直接访问到容器的80端口
docker run -d -p 80:80 nginx
# 执行结果
# e5cb86881392fa7751c00162aa46f71899c3249a063389e38aa001a8bc9821f6
```

* 绑定容器目录(数据持久化保存)

如果容器没有绑定本机目录，那么当删除容器时，容器内的数据也将被清空

```shell
# -v -> volume 挂载卷
# 容器内对文件夹的修改会影响容器外的文件夹,反之同理
mkdir www
touch ./www/index.html
docker run -d -p 80:80 -v ./www:/usr/share/nginx/html nginx
# e8b0bc36bfbfce5a837684558d347c6d173ac1e48755a95a6d2bfbd6dc34b858
```

* 创建挂载卷(数据持久化保存)
<details>
<summary>Linux</summary>

```shell
# 创建一个挂载目录
docker volume create docker_nginx_www
# 直接把 nginx容器 中的 html 同步到刚创建的挂载目录中
docker run -d -p 80:80 -v docker_nginx_www:/usr/share/nginx/html nginx
# 查看挂载目录信息
docker volume inspect docker_nginx_www
# 执行结果
# [
#     {
#         "CreatedAt": "2026-02-04T13:28:10Z",
#         "Driver": "local",
#         "Labels": null,
#         "Mountpoint": "/var/lib/docker/volumes/docker_nginx_www/_data",
#         "Name": "docker_nginx_www",
#         "Options": null,
#         "Scope": "local"
#     }
# ]
vi /var/lib/docker/volumes/docker_nginx_www/_data/index.html
```
</details>

<details>
<summary>Windows</summary>

```shell
# 创建一个挂载目录
docker volume create docker_nginx_www
# 查看挂载目录信息
docker volume inspect docker_nginx_www
# 执行结果
# [
#     {
#         "CreatedAt": "2026-02-04T13:28:10Z",
#         "Driver": "local",
#         "Labels": null,
#         "Mountpoint": "/var/lib/docker/volumes/docker_nginx_www/_data",
#         "Name": "docker_nginx_www",
#         "Options": null,
#         "Scope": "local"
#     }
# ]
mkdir nginx_www
# 在本机上创建一个指定目录
docker cp my_nginx:/var/lib/docker/volumes/docker_nginx_www/_data ./nginx_www
# 把容器中的文件复制到指定目录
docker run -d -p 80:80 -v my_nginx:
```
</details>

## 比较少用的命令
```shell
docker pull --platform=xxxx nginx
# --platform 表示拉取特定cpu架构的镜像，通常不需要设置，docker会自动拉取适合当前cpu架构的镜像
# 如：Linux/amd64、Linux/arm64、Linux/arm/v7、Linux/arm/v6
```