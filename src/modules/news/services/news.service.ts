import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm/repository/Repository'

import { NewsToItemById, NewsToListItem } from 'src/modules/news/interfaces/news'

import { NewsEntity } from 'src/modules/news/entities/news.entity'

import { NewsDataMapper } from 'src/modules/news/data-mappers/news.data-mapper'

@Injectable()
export class NewsService {
  constructor(
    private readonly newsDataMapper: NewsDataMapper,
    @InjectRepository(NewsEntity) private newsRepository: Repository<NewsEntity>,
  ) {}

  async getList(): Promise<{ data: NewsToListItem[] }> {
    const newsList = await this.newsRepository.find({
      where: { isPublished: true },
    })

    return { data: newsList.map((news) => this.newsDataMapper.getList(news)) }
  }

  async getItemById(id: string): Promise<{ data: NewsToItemById }> {
    const foundItem = await this.newsRepository.findOne({
      where: {
        id,
        isPublished: true,
      },
    })

    if (!foundItem) {
      throw new NotFoundException()
    }

    return { data: this.newsDataMapper.getItemById(foundItem) }
  }
}
