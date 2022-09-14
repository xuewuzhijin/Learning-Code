# 流程

1. 首先创建 `scrapy` 项目

```shell
User\Desktop> scrapy startproject spider_scrapy
```

2. 接着 `CD` 到项目

```shell
User\Desktop> cd spider_scrapy
```

3. 接着创建一个爬虫，再把项目用 `VSCode` 打开

```shell
User\Desktop\spider_scrapy> scrapy genspider zhihu www.zhihu.com
code .
```

4. 直接写代码 `spider_scrapy\spiders\zhihu.py`

  > 文件中用到的字段可以用 scrapy 来进行输出，前提是需要在 `spider_scrapy\items.py` 文件中提前设置好字段

5. 写好后，执行 scrapy

```shell
User\Desktop\spider_scrapy> scrapy crawl zhihu -o zhihu.json
```

> `-o` 输出的是数据类型，可以是 json 可以是 csv
