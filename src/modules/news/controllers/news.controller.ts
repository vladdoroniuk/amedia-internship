import { Controller, Get, Param } from '@nestjs/common'
import { ApiParam, ApiTags } from '@nestjs/swagger'

import { NewsToItemById, NewsToListItem } from 'src/modules/news/interfaces/news'

import { NewsGetByIdRequestDto } from 'src/modules/news/dto/requests/news-get-by-id-request.dto'

import { NewsService } from 'src/modules/news/services/news.service'

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('list')
  async getList(): Promise<{ data: NewsToListItem[] }> {
    return await this.newsService.getList()
  }

  @Get('item/:id')
  @ApiParam({ name: 'id', type: 'string' })
  async getItemById(@Param() req: NewsGetByIdRequestDto): Promise<{ data: NewsToItemById }> {
    const { id } = req

    return await this.newsService.getItemById(id)
  }
}
