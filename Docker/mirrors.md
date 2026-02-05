# Docker 添加镜像

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
```shell
sudo service docker restart
```