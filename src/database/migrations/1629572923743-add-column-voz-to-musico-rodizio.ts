import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnVozToMusicoRodizio1629572923743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("alter table MusicoRodizio add column voz_id int;");
        await queryRunner.query("alter table MusicoRodizio add constraint FK_MUSICO_VOZ foreign key (voz_id) references Voz(id);");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("alter table MusicoRodizio drop foreign key FK_MUSICO_VOZ;");
        await queryRunner.query("alter table MusicoRodizio drop column voz_id;");
    }

}
