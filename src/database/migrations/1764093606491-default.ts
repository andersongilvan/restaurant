import type { MigrationInterface, QueryRunner } from 'typeorm'

export class Default1764093606491 implements MigrationInterface {
	name = 'Default1764093606491'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "tbles" ("id" SERIAL NOT NULL, "table_number" integer NOT NULL, CONSTRAINT "PK_bd22f631e4b2ac07eda91ad6ecf" PRIMARY KEY ("id"))`,
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "tbles"`)
	}
}
