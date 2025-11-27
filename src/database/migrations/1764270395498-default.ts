import type { MigrationInterface, QueryRunner } from 'typeorm'

export class Default1764270395498 implements MigrationInterface {
	name = 'Default1764270395498'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "price" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "table_session_id" integer, "product_id" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`,
		)
		await queryRunner.query(
			`ALTER TABLE "orders" ADD CONSTRAINT "FK_a955620b97c0a9dfcf80acef786" FOREIGN KEY ("table_session_id") REFERENCES "table_session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		)
		await queryRunner.query(
			`ALTER TABLE "orders" ADD CONSTRAINT "FK_ac832121b6c331b084ecc4121fd" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "orders" DROP CONSTRAINT "FK_ac832121b6c331b084ecc4121fd"`,
		)
		await queryRunner.query(
			`ALTER TABLE "orders" DROP CONSTRAINT "FK_a955620b97c0a9dfcf80acef786"`,
		)
		await queryRunner.query(`DROP TABLE "orders"`)
	}
}
