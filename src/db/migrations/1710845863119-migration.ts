import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1710845863119 implements MigrationInterface {
  name = 'Migration1710845863119'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "appeal" ("id" SERIAL NOT NULL, "title" character varying, "slug" text NOT NULL, "thumbnailUrl" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f644a99d2dfcff9facb08bd1697" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "news" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "description" text NOT NULL, "isPublished" boolean NOT NULL DEFAULT false, "publishedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "language" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "language_news_news" ("languageId" integer NOT NULL, "newsId" uuid NOT NULL, CONSTRAINT "PK_474156561c63819de31fef2f9d7" PRIMARY KEY ("languageId", "newsId"))`,
    )
    await queryRunner.query(`CREATE INDEX "IDX_c6365c3e674a80478fa3c530d3" ON "language_news_news" ("languageId") `)
    await queryRunner.query(`CREATE INDEX "IDX_6f44e1a1919b98e139efc398cd" ON "language_news_news" ("newsId") `)
    await queryRunner.query(
      `ALTER TABLE "language_news_news" ADD CONSTRAINT "FK_c6365c3e674a80478fa3c530d35" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "language_news_news" ADD CONSTRAINT "FK_6f44e1a1919b98e139efc398cd9" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "language_news_news" DROP CONSTRAINT "FK_6f44e1a1919b98e139efc398cd9"`)
    await queryRunner.query(`ALTER TABLE "language_news_news" DROP CONSTRAINT "FK_c6365c3e674a80478fa3c530d35"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_6f44e1a1919b98e139efc398cd"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_c6365c3e674a80478fa3c530d3"`)
    await queryRunner.query(`DROP TABLE "language_news_news"`)
    await queryRunner.query(`DROP TABLE "language"`)
    await queryRunner.query(`DROP TABLE "news"`)
    await queryRunner.query(`DROP TABLE "appeal"`)
  }
}
