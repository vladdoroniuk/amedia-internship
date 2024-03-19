import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('language')
export class LanguageEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string
}
