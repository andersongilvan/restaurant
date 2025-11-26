import type { MigrationInterface, QueryRunner } from 'typeorm'

export class Default1764167697747 implements MigrationInterface {
	name = 'Default1764167697747'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "table_session" ADD "open_at" TIMESTAMP NOT NULL DEFAULT now()`,
		)
		await queryRunner.query(
			`ALTER TABLE "table_session" ADD "closed_at" TIMESTAMP`,
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "table_session" DROP COLUMN "closed_at"`,
		)
		await queryRunner.query(`ALTER TABLE "table_session" DROP COLUMN "open_at"`)
	}
}
