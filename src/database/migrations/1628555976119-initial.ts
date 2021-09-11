import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1628555976119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table voz (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );

        await queryRunner.query(`
            create table nivel (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );


        await queryRunner.query(`
            create table culto (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );
        
        await queryRunner.query(`
            create table instrumento (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );
                 
        await queryRunner.query(`
            create table musico (
                id int primary key auto_increment,
                nome varchar(255) not null,
                celular varchar(11),
                instrumento_id int not null,                
                nivel_id int not null,
                voz_principal int not null,

                foreign key (nivel_id) references nivel(id),
                foreign key (voz_principal) references voz(id),
                foreign key (instrumento_id) references instrumento(id)
            );`
        );        
            
        await queryRunner.query(`
            create table musicoculto (
                id int primary key auto_increment,
                musico_id int not null,
                culto_id int not null,
                qtd_tocada int default 0,
                
                foreign key (musico_id) references musico(id),
                foreign key (culto_id) references culto(id),
                unique key (musico_id, culto_id)
            );`
        );

        await queryRunner.query(`
            create table musicovoz (
                id int primary key auto_increment,
                musico_id int not null,
                voz_id int not null,
                
                foreign key (musico_id) references musico(id),
                foreign key (voz_id) references voz(id)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("drop table musicoculto;");
        await queryRunner.query("drop table musicovoz;");
        await queryRunner.query("drop table musico;");
        await queryRunner.query("drop table instrumento;");
        await queryRunner.query("drop table culto;");
        await queryRunner.query("drop table nivel;");
        await queryRunner.query("drop table voz;");
    }
}
