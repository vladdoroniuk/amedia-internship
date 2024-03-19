import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  title: string

  @Column({
    type: 'text',
  })
  description: string

  @Column({ default: false })
  isPublished: boolean

  @Column({ type: 'timestamptz', nullable: true })
  publishedAt: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
