import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { NewsController } from './controllers/news.controller'
import { NewsDataMapper } from './data-mappers/news.data-mapper'
import { NewsEntity } from './entities/news.entity'
import { NewsService } from './services/news.service'

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  controllers: [NewsController],
  providers: [NewsService, NewsDataMapper],
})
export class NewsModule {}
