import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1710845863119 implements MigrationInterface {
  name = 'Migration1710845863119'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "appeal" ("id" SERIAL NOT NULL, "title" character varying, "slug" text NOT NULL, "thumbnailUrl" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f644a99d2dfcff9facb08bd1697" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "language" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "news" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "description" text NOT NULL, "isPublished" boolean NOT NULL DEFAULT false, "publishedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "language_news" ("id" SERIAL NOT NULL, "translatedTitle" text NOT NULL, "translatedDescription" text NOT NULL, "languageId" integer, "newsId" uuid, CONSTRAINT "PK_fc39478a58686970efe60ff8a47" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "language_news" ADD CONSTRAINT "FK_4c730f214a3f96950154ac6baf7" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "language_news" ADD CONSTRAINT "FK_9ba02dc26a9c78012c95e6f919e" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "language_news" DROP CONSTRAINT "FK_9ba02dc26a9c78012c95e6f919e"`)
    await queryRunner.query(`ALTER TABLE "language_news" DROP CONSTRAINT "FK_4c730f214a3f96950154ac6baf7"`)
    await queryRunner.query(`DROP TABLE "language_news"`)
    await queryRunner.query(`DROP TABLE "news"`)
    await queryRunner.query(`DROP TABLE "language"`)
    await queryRunner.query(`DROP TABLE "appeal"`)
  }
}
