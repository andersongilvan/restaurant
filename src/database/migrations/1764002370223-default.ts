import type { MigrationInterface, QueryRunner } from 'typeorm'

export class Default1764002370223 implements MigrationInterface {
	name = 'Default1764002370223'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "img_url" text NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "products"`)
	}
}
