import { IsUUID } from 'class-validator'

import { GenericDto } from 'src/core/abstracts/generic.dto'

export class NewsGetByIdRequestDto extends GenericDto {
  @IsUUID()
  id: string
}
