# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ArticleItem(scrapy.Item):
    # define the fields for your item here like:
    url = scrapy.Field()
    type = scrapy.Field()
    title = scrapy.Field()
    content = scrapy.Field()
    vote_up_count = scrapy.Field()
    comment_count = scrapy.Field()
    created_time = scrapy.Field()
    pass
