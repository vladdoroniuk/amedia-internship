import { Injectable } from '@nestjs/common'

import { NewsToItemById, NewsToListItem } from 'src/modules/news/interfaces/news'

import { NewsEntity } from 'src/modules/news/entities/news.entity'

@Injectable()
export class NewsDataMapper {
  getList(entity: NewsEntity): NewsToListItem {
    const { id, title, description, isPublished, publishedAt } = entity

    return {
      id,
      title,
      description,
      isPublished,
      publishedAt,
    }
  }

  getItemById(entity: NewsEntity): NewsToItemById {
    const { id, title, description, isPublished, publishedAt } = entity

    return {
      id,
      title,
      description,
      isPublished,
      publishedAt,
    }
  }
}
