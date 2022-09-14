import json
import scrapy
from scrapy import Selector

from spider_scrapy.items import ArticleItem


class ZhihuSpider(scrapy.Spider):
    name = 'zhihu'
    allowed_domains = ['zhihu.com']
    start_urls = [
        'https://www.zhihu.com/api/v4/web_moments/xiao-mu-51-86/activities?page_num=1']

    def parse(self, response):
        # 起初是通过页面来抓取数据，后面由于有更好的方式，且页面抓取比较复杂，所以找到了使用API的方式来获取数据
        # sel = Selector(response)
        # lists = sel.css('#Profile-activities > div:nth-child(2) > div.List-item')
        # for item in lists:
        #   article_itme = ArticleItem()
        #   article_itme['title'] = item.css('h2 > div > a::text').extract_first()
        #   article_itme['content'] = item.css('div.RichContent > span > div > span::text').extract_first()
        #   article_itme['approve'] = item.css('div.RichContent > div > span > button::text').extract_first()
        #   article_itme['comments'] = item.css('div.RichContent > div > div.ContentItem-action > button::text').extract_first()
        #   article_itme['created_time'] = item.css('div.List-itemMeta > div > span:nth-child(2)::text').extract_first()
        #   yield article_itme
        data = json.loads(response.body.decode())
        for item in data['data']:
            article_itme = ArticleItem()
            article_itme['type'] = item['target']['type']
            if 'question' in item['target']:
                article_itme['url'] = 'https://www.zhihu.com/question/{}/answer/{}'.format(
                    item['target']['question']['id'], item['target']['id'])
                article_itme['title'] = item['target']['question']['title']
                article_itme['content'] = item['target']['content']
                article_itme['vote_up_count'] = item['target']['voteup_count']
                article_itme['comment_count'] = item['target']['comment_count']
                article_itme['created_time'] = item['target']['created_time']
                # print(item['target']['question']['title'])
            elif item['target']['type'] != 'pin':
                article_itme['url'] = 'https://zhuanlan.zhihu.com/p/{}'.format(
                    item['target']['id'])
                article_itme['title'] = item['target']['title']
                article_itme['content'] = item['target']['content'] if 'content' in item['target'] else None
                article_itme['vote_up_count'] = item['target']['voteup_count'] if 'voteup_count' in item['target'] else item['target']['answer_count']
                article_itme['comment_count'] = item['target']['comment_count']
                article_itme['created_time'] = item['target']['created_time'] if 'created_time' in item['target'] else item['target']['created']
                # print(item['target']['title'])
            yield article_itme
        if not data['paging']['is_end']:
            yield scrapy.Request(
                url=data['paging']['next'],
                callback=self.parse
            )
