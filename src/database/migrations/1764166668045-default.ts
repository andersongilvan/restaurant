import type { MigrationInterface, QueryRunner } from 'typeorm'

export class Default1764166668045 implements MigrationInterface {
	name = 'Default1764166668045'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "table_session" ("id" SERIAL NOT NULL, "table_id" integer, CONSTRAINT "REL_85acf2e0233bb3d43d79030fda" UNIQUE ("table_id"), CONSTRAINT "PK_8e66161a0040720fc1e718f7cae" PRIMARY KEY ("id"))`,
		)
		await queryRunner.query(
			`ALTER TABLE "table_session" ADD CONSTRAINT "FK_85acf2e0233bb3d43d79030fda7" FOREIGN KEY ("table_id") REFERENCES "tbles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "table_session" DROP CONSTRAINT "FK_85acf2e0233bb3d43d79030fda7"`,
		)
		await queryRunner.query(`DROP TABLE "table_session"`)
	}
}
