# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import logging

from spider_scrapy.items import ArticleItem

# 把控制台输出的信息加入是哪个文件的类输出的，一定要实例化，否则不生效
logger = logging.getLogger(__name__)

class SpiderScrapyPipeline:
    def process_item(self, item, spider):
      # 如果爬虫获取到的数据经过这里，需要判断爬虫名字是不是 zhihu
      if spider.name == 'zhihu' and isinstance(item, ArticleItem):
        logger.warning(item)
      return item
