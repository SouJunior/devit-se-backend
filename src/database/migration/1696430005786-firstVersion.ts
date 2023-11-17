import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1696430005786 implements MigrationInterface {
    name = ' $npmConfigName1696430005786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "companyName" character varying NOT NULL, "cnpj" character varying, "sector" character varying, "address" character varying NOT NULL, "complement" character varying, "district" character varying NOT NULL, CONSTRAINT "PK_ad727d0b2b2f9bc3f78fff1b19a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jobs_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "jobTitle" character varying NOT NULL, "jobLevel" character varying NOT NULL, "publicityChannel" character varying NOT NULL, "status" boolean NOT NULL, "jobFormat" character varying NOT NULL, "typeContract" character varying NOT NULL, "salary" character varying, "benefits" character varying, "jobDescription" character varying, "softRequirements" character varying, "hardRequirements" character varying, "devitRating" character varying, "CompanyName" character varying NOT NULL, "publicationDate" TIMESTAMP NOT NULL, "finishDate" TIMESTAMP, "company_id" uuid NOT NULL, CONSTRAINT "PK_24dc6a8e00afa4c88953432890d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jobs_draft_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "jobTitle" character varying NOT NULL, "jobLevel" character varying NOT NULL, "publicityChannel" character varying NOT NULL, "status" boolean NOT NULL, "jobFormat" character varying NOT NULL, "typeContract" character varying NOT NULL, "salary" character varying, "benefits" character varying, "jobDescription" character varying, "softRequirements" character varying, "hardRequirements" character varying, "devitRating" character varying, "CompanyName" character varying NOT NULL, "publicationDate" TIMESTAMP NOT NULL, "finishDate" TIMESTAMP, "company_id" uuid NOT NULL, CONSTRAINT "PK_416408202ede84331db82ebd96e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "jobs_entity" ADD CONSTRAINT "FK_517f9afcff40208f61f0e1206a0" FOREIGN KEY ("company_id") REFERENCES "company_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jobs_draft_entity" ADD CONSTRAINT "FK_683c04fabbe1a97a84b048e4c75" FOREIGN KEY ("company_id") REFERENCES "company_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs_draft_entity" DROP CONSTRAINT "FK_683c04fabbe1a97a84b048e4c75"`);
        await queryRunner.query(`ALTER TABLE "jobs_entity" DROP CONSTRAINT "FK_517f9afcff40208f61f0e1206a0"`);
        await queryRunner.query(`DROP TABLE "jobs_draft_entity"`);
        await queryRunner.query(`DROP TABLE "jobs_entity"`);
        await queryRunner.query(`DROP TABLE "company_entity"`);
    }

}
