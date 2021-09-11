import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableRodizio1629331354347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table rodizio (
                id int primary key auto_increment,
                data_rodizio date not null,
                culto_id int not null,

                foreign key (culto_id) references culto(id)
            );
        `);

        await queryRunner.query(`
            create table musicorodizio (
                id int primary key auto_increment,
                musico_id int not null,
                rodizio_id int not null,
                
                foreign key (musico_id) references musico(id),
                foreign key (rodizio_id) references rodizio(id),
                unique key (musico_id, rodizio_id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("drop table musicorodizio");
        await queryRunner.query("drop table rodizio");
    }

}
