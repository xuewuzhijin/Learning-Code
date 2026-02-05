# Docker run 参数笔记


| 快速跳转对应位置                      | -                               | -                                | -                           |
|-------------------------------|---------------------------------|----------------------------------|-----------------------------|
| [add-host 添加主机映射](#add-host)  | [a,attach 附加终端](#a,attach)      | [cap-add/drop 添加/移除权限](#cap-add) | [d, detach 后台运行](#d,detach) |
| [device 挂载设备](#device)        | [e,env 环境变量](#e,env)            | [entrypoint 入口命令](#entrypoint)   | [expose 暴露端口](#expose)      |
| [h,hostname 主机名](#h,hostname) | [i,interactive](#i,interactive) | [t,tty 伪终端](#t,tty)              | [it 交互终端](#it)              |
| [network 网络模式](#network)      | [link 容器连接](#link)              | [m,memory 内存限制](#m,memory)       | [mount 挂载存储](#mount)        |
| [name 容器名称](#name)            | [p,publish 端口映射](#p,publish)    | [privileged 特权模式](#privileged)   | [restart 重启策略](#restart)    |
| [rm 删除/临时容器](#rm)             | [v,volume 数据卷](#v,volume)       |                                  |                             |

<a id="add-host"></a>
## `--add-host`
- 用途：添加自定义的主机名到IP地址的映射（类似 /etc/hosts）。
- 场景：需要在容器内自定义 DNS 解析，例如测试特定域名解析或绕过某些网络限制。

```shell
docker run --add-host example.com:192.168.1.100 ...
```
> **注意：**
格式必须为 host:ip，否则容器无法启动。  
与容器内原有的 /etc/hosts 内容会合并，但可能被 --network 参数覆盖。

<a id="a,attach"></a>
## `-a`, `--attach`
- 用途：将本地终端（STDIN/STDOUT/STDERR）连接到容器。
- 场景：需要实时查看容器输出或与容器交互（如调试）。

```shell
docker run -a stdin -a stdout ...
```
> **注意：**
若容器未以后台模式运行（不加 -d），默认会自动附加。  
若附加后容器退出，终端会断开。

<a id="cap-add"></a>
## `--cap-add` / `--cap-drop`
- 用途：添加或移除容器的 Linux 能力（权限）。
- 场景：需要容器执行需要特殊权限的操作（如 CAP_NET_ADMIN 配置网络）。

```shell
docker run --cap-add=NET_ADMIN ...
```
> **注意：**
滥用可能导致安全风险（如 CAP_SYS_ADMIN）。  
与 --privileged 冲突，后者会赋予所有能力。

<a id="d,detach"></a>
## `-d`, `--detach`
- 用途：将容器以后台模式运行。
- 场景：运行长期服务（如 Web 服务器）时避免占用当前终端。

```shell
docker run -d nginx
```
> **注意：**
后台模式下无法直接看到容器输出，需用 docker logs 查看。  
若容器主进程退出，容器会自动停止。

<a id="device"></a>
## `--device`
- 用途：将宿主机的设备文件挂载到容器中。
- 场景：需要容器访问硬件设备（如 GPU、USB 设备）。

```shell
docker run --device /dev/nvidia0:/dev/nvidia0 ...
```
> **注意：**
路径必须真实存在，否则容器启动失败。  
可能导致安全风险（如访问宿主机磁盘）。

<a id="e,env"></a>
## `-e`, `--env`
- 用途：设置容器内的环境变量。
- 场景：传递配置参数（如数据库地址、日志级别）。

```shell
docker run -e "ENV1=value1" -e "ENV2=value2" ...
```
> **注意：**
环境变量可能被 Dockerfile 中的 ENV 覆盖。  
敏感信息建议用 --env-file 从文件加载。

<a id="entrypoint"></a>
## `--entrypoint`
- 用途：覆盖镜像中的默认入口命令（ENTRYPOINT）。
- 场景：需要自定义容器的启动命令（如替换为调试脚本）。

```shell
docker run --entrypoint /bin/bash ...
```
> **注意：**
若镜像使用 CMD 定义默认命令，--entrypoint 会替换其入口点。  
语法需符合 Shell 或 Exec 格式。

<a id="expose"></a>
## `--expose`
- 用途：声明容器需要暴露的端口（仅元数据，不映射到宿主机）。
- 场景：文档化容器的服务端口，或供其他容器链接使用。

```shell
docker run --expose 80 ...
```
> **注意：**
不会自动映射端口，需配合 -p 或 -P 使用。  
若未暴露端口，其他容器无法通过 --link 访问。

<a id="h,hostname"></a>
## `-h`, `--hostname`
- 用途：设置容器的主机名。
- 场景：需要自定义容器的网络标识（如服务注册发现）。

```shell
docker run --hostname my-container ...
```
> **注意：**
主机名需符合 DNS 命名规范。  
可能影响容器内某些依赖主机名的服务（如 Apache）。

<a id="i,interactive"></a>
## `-i`, `--interactive`
- 用途：保持标准输入（STDIN）打开，即使未附加。
- 场景：需要与容器交互（如运行交互式 Shell）。
```shell
docker run -i -t ubuntu /bin/bash
```
> **注意：**
通常与 -t 联用，提供伪终端。  
若未附加（未加 -a stdin），可能无法输入。

<a id="t,tty"></a>
## `-t`, `--tty`
- 用途：分配一个伪终端（TTY）。
- 场景：运行交互式 Shell（如 bash）。
```shell
docker run -it ubuntu /bin/bash
```
> **注意：**
通常与 -i 联用。  
无 TTY 时无法运行交互式命令。

<a id="it"></a>
## `-it`
- 用途：组合 `-i` `-t` 像操作本地Shell一样操作容器。
```shell
# 场景1：进入Ubuntu容器调试
docker run -it ubuntu /bin/bash

# 场景2：运行Python交互环境
docker run -it python:3.11 python

# 场景3：已运行容器中执行命令（推荐方式！）
docker exec -it my-nginx /bin/bash  # 退出后容器继续运行！
```
| 问题         | 原因                   | 解决方案                                                   |
|------------|----------------------|--------------------------------------------------------|
| 容器启动后立即退出  | 未加 `-it` 且命令非阻塞进程    | 加 `-it` 或确保CMD是长期运行进程                                  |
| 退出容器导致容器停止 | 用 `docker attach` 进入 | 改用 `docker exec -it`（退出不影响容器）                          |
| 容器内无bash   | 镜像精简（如alpine）        | 改用 `/bin/sh`：`docker exec -it container /bin/sh`       |
| 中文乱码       | 容器内字符集缺失             | 加环境变量：`docker exec -it -e LANG=C.UTF-8 container bash` |

> **黄金法则：** 调试容器首选 docker exec -it 容器名 /bin/bash，而非 `docker attach`（后者退出会停容器）

<a id="network"></a>
## `--network`
| 模式         | 命令示例                     | 特点               | 适用场景            |
|------------|--------------------------|------------------|-----------------|
| bridge（默认） | `--network bridge`       | 独立IP，需 `-p` 映射端口 | 普通Web服务、开发测试    |
| 自定义bridge  | `--network my-net`       | 容器名可DNS解析，隔离性好   | 多容器协作（如Web+DB）  |
| host       | `--network host`         | 共享宿主机网络，无端口映射    | 高性能需求（监控/网关）    |
| none       | `--network none`         | 无网络接口（仅lo）       | 安全敏感任务（密码生成）    |
| container  | `--network container:db` | 共享另一容器网络栈        | Sidecar模式（日志收集） |

- 实战练习
```shell
# 1. 创建自定义网络
docker network create app-net

# 2. 启动MySQL（自动获得DNS名"mysql"）
docker run -d --name mysql --network app-net -e MYSQL_ROOT_PASSWORD=123 mysql

# 3. 启动Web应用（直接通过"mysql"访问数据库！）
docker run -d --name web --network app-net -p 8080:80 my-web-app

# 验证：进入web容器 ping mysql
docker exec -it web ping mysql
```
> **注意：** 默认`bridge`网络无法通过容器名通信！必须用自定义网络

- `host` 网络高性能场景
```shell
# 直接使用宿主机80端口（无需 -p 80:80）
docker run -d --name nginx-host --network host nginx

# 验证：宿主机直接访问 http://localhost
curl http://localhost
```
> **注意：**
Host 模式下 `-p` 参数无效  
宿主机 80 端口被占用则启动失败  
仅适用于单容器独占端口场景

<a id="link"></a>
## `--link`
- 用途：将其他容器连接到当前容器（旧版功能，推荐用自定义网络）。
- 场景：容器间通信（如 Web 服务连接数据库容器）。
```shell
docker run --link db:mysql ...
```
> **注意：**
仅支持单向连接。  
已过时，推荐使用 --network 自定义网络实现双向通信。

<a id="m,memory"></a>
## `-m`, `--memory`
- 用途：限制容器使用的内存大小。
- 场景：防止容器占用过多宿主机内存导致系统崩溃。
```shell
docker run --memory 512m ...
```
> **注意：**
单位支持 b, k, m, g。  
需合理分配，避免 OOM Killer 终止容器进程。

<a id="mount"></a>
## `--mount`
- 用途：挂载文件系统（卷、绑定挂载、tmpfs 等）。
- 场景：持久化数据、共享文件或配置。
```shell
docker run --mount type=bind,source=/host/path,target=/container/path ...
```
> **注意：**
语法复杂，需严格遵循 type=TYPE,source=PATH,target=PATH 格式。  
绑定挂载时路径需存在，否则容器启动失败。

<a id="name"></a>
## `--name`
- 用途：为容器指定自定义名称。
- 场景：方便管理容器（如日志查看、停止容器）。
```shell
docker run --name my-web-server ...
```
> **注意：**
名称必须唯一，重复会报错。  
删除容器后可复用名称。

<a id="p,publish"></a>
## `-p`, `--publish`
- 用途：将容器端口映射到宿主机。
- 场景：对外暴露服务（如 Web 服务映射 80:80）。
```shell
docker run -p 8080:80 ...
```
> **注意：**
端口冲突会导致容器启动失败。  
可指定协议（如 -p 80:80/udp）。

---

- 典型错误：`Bind for 0.0.0.0:80 failed: port is already allocated`
- 场景：部署 Nginx 时宿主机 80 端口被占用
```shell
# 检查端口占用（Linux）
sudo lsof -i :80 || netstat -tuln | grep 80

# 方案1：更换宿主机端口
docker run -p 8080:80 nginx

# 方案2：停止占用进程（谨慎！）
sudo kill -9 $(lsof -t -i:80)
```
> **注意：**
格式必须是 宿主机端口:容器端口（顺序不可反）  
多容器不能映射同一宿主机端口  
Windows 需注意防火墙拦截

<a id="privileged"></a>
## `--privileged`
- 用途：赋予容器几乎所有的宿主机权限。
- 场景：需要访问宿主机设备或执行特权操作（如运行 Docker-in-Docker）。
```shell
docker run --privileged ...
```
> **注意：**
极大安全隐患，仅在必要时使用。  
可能绕过容器隔离机制。

---

- 高危错误：为普通应用容器开启特权，导致宿主机被入侵
- 正确场景：仅用于需操作宿主机设备的场景（如 Docker-in-Docker、监控工具）
```shell
# 危险：普通 Web 服务
docker run --privileged nginx

# 安全：仅添加必要权限
docker run --cap-add=NET_ADMIN --device=/dev/net/tun openvpn
```
> **注意：**
特权容器可访问宿主机所有设备、修改内核参数  
生产环境严格审计，优先用 --cap-add 精细授权

<a id="restart"></a>
## `--restart`
- 用途：设置容器退出时的重启策略。
- 场景：确保服务自动恢复（如崩溃后重启）。
- 策略：
  - no：默认，不自动重启。
  - on-failure[:max-retries]：失败时重启。
  - always：总是重启。
  - unless-stopped：除手动停止外，始终重启。
```shell
docker run --restart unless-stopped ...
```
> **注意：**
依赖 Docker 守护进程的健康检查机制。  
重启次数受系统资源限制。

---

- 典型错误：容器因配置错误无限重启，刷爆日志
- 场景：应用启动命令错误，设置 `--restart=always` 后 CPU 占满
```shell
# 先测试能否正常启动（不加 restart）
docker run --name test-app my-image

# 确认无误后再加策略（推荐 unless-stopped）
docker run -d --restart=unless-stopped --name prod-app my-image

# 若已陷入重启循环：立即停止
docker update --restart=no bad-container && docker stop bad-container
```
**策略选择：**
- on-failure:3：失败最多重试 3 次（调试友好）
- unless-stopped：生产环境首选（守护进程重启时自动恢复）
- 避免对一次性任务容器设置 restart

<a id="rm"></a>
## `--rm`
- 用途：容器退出后自动删除。
- 场景：临时容器（如一次性任务）。
```shell
docker run --rm alpine echo "Hello"

# 1. 删除单个已停止容器
docker rm my-nginx

# 2. 强制删除运行中的容器（慎用！）
docker rm -f mysql-prod

# 3. 删除容器并清理其匿名卷（数据库测试后清理）
docker rm -v test-db
# 仅删除容器创建时未指定宿主机路径的卷（匿名卷）
# 命名卷需手动清理：docker volume rm 卷名

# 4. 一键删除所有已停止容器（开发环境清理神器）
docker rm $(docker ps -a -q -f status=exited)

# 5. 仅删除容器间的 --link 链接（旧版网络方案）
docker rm -l webapp/redis  # 保留 webapp 和 redis 容器
```
> **注意：**
与 `-d` 冲突，后台容器退出后会自动删除。  
匿名卷也会被删除，持久化数据需使用命名卷。

---

- 典型错误：`docker run -d --rm` 后容器退出，日志无法查看
- 场景：后台运行临时任务容器，需保留日志排查问题
```shell
# 临时调试：不用 --rm，手动清理
docker run -d --name debug-task my-image
docker logs debug-task
docker rm -f debug-task  # 用完手动删

# 真·临时任务（如执行命令）：
docker run --rm alpine cat /etc/os-release
```
> **注意：**
`--rm` 与 `-d` 可共存，但容器退出即删（适合短生命周期任务）  
匿名卷也会被删除！需持久化数据请用命名卷

<a id="v,volume"></a>
## `-v`, `--volume`
- 用途：挂载卷或绑定宿主机目录。
- 场景：持久化数据、共享配置文件。
```shell
docker run -v /host/path:/container/path ...
```
> **注意：**
路径需存在，否则自动创建（Linux 下可能权限问题）。  
Windows 下需使用绝对路径（如 C:\data）。

---
- 典型错误：容器内文件为空 / 权限 denied / 数据丢失
- 场景：MySQL 容器挂载宿主机目录后无法写入
```shell
# ✅ 正确：先创建目录并授权（Linux）
sudo mkdir -p /data/mysql && sudo chown -R 999:999 /data/mysql  # MySQL 容器用户 UID=999
docker run -v /data/mysql:/var/lib/mysql mysql

# ✅ 推荐：使用命名卷（自动处理权限）
docker volume create mysql-data
docker run -v mysql-data:/var/lib/mysql mysql
```
> **注意：**
Windows 路径需用绝对路径：C:/data:/app（注意斜杠方向）  
挂载会覆盖容器内目标路径原有数据（镜像中的文件不可见）  
WSL2 中挂载 Windows 目录性能较差，建议挂载 Linux 子系统路径