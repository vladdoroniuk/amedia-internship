import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

import { NewsEntity } from './news.entity'

@Entity('language')
export class LanguageEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @ManyToMany(() => NewsEntity)
  @JoinTable()
  news: NewsEntity[]
}
