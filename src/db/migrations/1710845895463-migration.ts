import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1710845895463 implements MigrationInterface {
  name = 'Migration1710845895463'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO language (name)
        VALUES
          ('German'),
          ('Ukrainian'),
          ('Spanish'),
          ('Polish'),
          ('French');
      `)

    await queryRunner.query(`
      INSERT INTO news (id, title, description, "isPublished", "publishedAt", "createdAt", "updatedAt")
        VALUES
          ('7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2', 'Title 1', 'Description 1', true, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z'),
          ('4b75be14-ba8d-4be8-9ceb-d075152fe677', 'Title 2', 'Description 2', false, null, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z'),
          ('66d3bf59-4601-43d1-a416-723f8bda89d8', 'Title 3', 'Description 3', true, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z'),
          ('dc6575dc-9dcb-4a6c-8445-58998545a7c5', 'Title 4', 'Description 4', false, null, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z'),
          ('d72ac4ee-0613-48bb-bc15-dad13ec5999c', 'Title 5', 'Description 5', true, '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z', '2024-03-18T00:00:00Z');
      `)

    await queryRunner.query(`
      INSERT INTO language_news ("languageId", "newsId", "translatedTitle", "translatedDescription")
        VALUES
        (1, '7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2', 'Titel 1', 'Beschreibung 1'),
        (2, '7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2', 'Назва 1', 'Опис 1'),
        (3, '7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2', 'Título 1', 'Descripción 1'),
        (4, '7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2', 'Tytuł 1', 'Opis 1'),
        (5, '7cb6cfc6-f65d-4a8d-abff-33ea5c0f12e2', 'Título 1', 'Description 1');
      `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM news
        WHERE title IN ('Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5');
      `)
  }
}
