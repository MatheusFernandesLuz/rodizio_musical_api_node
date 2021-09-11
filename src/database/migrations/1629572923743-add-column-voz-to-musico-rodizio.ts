import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnVozToMusicoRodizio1629572923743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("alter table musicorodizio add column voz_id int;");
        await queryRunner.query("alter table musicorodizio add constraint fk_musico_voz foreign key (voz_id) references voz(id);");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("alter table musicorodizio drop foreign key fk_musico_voz;");
        await queryRunner.query("alter table musicorodizio drop column voz_id;");
    }

}
