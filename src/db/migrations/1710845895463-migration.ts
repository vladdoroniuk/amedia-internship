import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1710845895463 implements MigrationInterface {
  name = 'Migration1710845895463'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO language (name)
         VALUES
           ('English'),
           ('Ukrainian'),
           ('Spanish'),
           ('Polish'),
           ('French');
      `,
    )

    await queryRunner.query(
      `INSERT INTO news (id, title, description, "isPublished", "publishedAt", "createdAt", "updatedAt")
         VALUES
           ('7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2', 'English Title', 'Description for first news', true, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z'),
           ('4b75be14-ba8d-4be8-9ceb-d075152fe677', 'Українська Назва', 'Опис для першої новини', false, null, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z'),
           ('66d3bf59-4601-43d1-a416-723f8bda89d8', 'Título En Español', 'Descripción de la tercera noticia', true, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z'),
           ('dc6575dc-9dcb-4a6c-8445-58998545a7c5', 'Tytuł Polski', 'Opis czwartej wiadomości', false, null, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z'),
           ('d72ac4ee-0613-48bb-bc15-dad13ec5999c', 'Francés Título', 'Description de la cinquième nouvelle', true, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z');
      `,
    )

    await queryRunner.query(
      `INSERT INTO language_news_news ("languageId", "newsId")
         VALUES
         (1, '7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2'),
         (2, '4b75be14-ba8d-4be8-9ceb-d075152fe677'),
         (3, '66d3bf59-4601-43d1-a416-723f8bda89d8'),
         (4, 'dc6575dc-9dcb-4a6c-8445-58998545a7c5'),
         (5, 'd72ac4ee-0613-48bb-bc15-dad13ec5999c');
      `,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM news
        WHERE title IN ('English Title', 'Українська Назва', 'Título En Español', 'Tytuł Polski', 'Francés Título');
      `,
    )
  }
}
