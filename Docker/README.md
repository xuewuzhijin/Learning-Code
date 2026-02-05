# Docker 学习笔记

- 镜像：是已经制作好的衣服
- 容器：是用来装衣服的衣柜

## 改用国内镜像
* `Windows/Mac`桌面版前往设置->`Docker Engine`
* `Linux` 使用以下命令

  `sudo vi /etc/docker/daemon.json`

复制以下内容
```json
{
  "experimental": false,
  "registry-mirrors": [
    "https://docker.1ms.run",
    "https://mirror.ccs.tencentyun.com",
    "https://docker.m.daocloud.io",
    "https://docker.1panel.live",
    "https://hub.rat.dev",
    "https://docker.xuanyuan.me"
  ]
}
```
完成以上操作重启 Docker

`sudo service docker restart` 

## 常用命令
* 镜像拉取
```shell
docker pull nginx
```

* 镜像运行
```shell
# docker run [名字/ID]
docker run nginx
# 如果本地不存在 nginx 镜像
# docker 将默认执行 docker pull nginx && docker run nginx
```

* 给容器指定一个名字

没有指定名字的容器，每次启动都会创建一个新的容器

```shell
docker run --name my_nginx nginx
```

* 列出所有已下载镜像以及删除镜像
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

* 分离模式，后台执行，不占用当前的命令行窗口
```shell
# -d -> detached mode
docker run -d nginx
# 执行结果
# 1b81e8de81e0ece00a6b5e0d5448eff23d130ac185cbd81e2d555a3b5213fd7b
```

* 查看正在运行的容器
```shell
# ps -> process status (进程状态)的缩写
docker ps
# 执行结果
# CONTAINER ID   IMAGE     COMMAND                   CREATED          STATUS          PORTS     NAMES
# 1b81e8de81e0   nginx     "/docker-entrypoint.…"   17 seconds ago   Up 16 seconds   80/tcp    epic_cori
``` 

* [删除容器](./docker-run.md#rm)
```shell
# 删除正在运行的容器需要加上 -f force 表示强制删除
docker rm -f 1b81e8de81e0
# 1b81e8de81e0ec
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