import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { LanguageEntity } from './language.entity'
import { NewsEntity } from './news.entity'

@Entity('language_news')
export class LanguageNewsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  translatedTitle: string

  @Column({ type: 'text' })
  translatedDescription: string

  @ManyToOne(() => LanguageEntity)
  @JoinTable()
  language: LanguageEntity

  @ManyToOne(() => NewsEntity)
  @JoinTable()
  news: NewsEntity
}
