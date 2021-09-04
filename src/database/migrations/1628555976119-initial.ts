import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1628555976119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table Voz (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );

        await queryRunner.query(`
            create table Nivel (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );


        await queryRunner.query(`
            create table Culto (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );
        
        await queryRunner.query(`
            create table Instrumento (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );
                 
        await queryRunner.query(`
            create table Musico (
                id int primary key auto_increment,
                nome varchar(255) not null,
                celular varchar(11),
                instrumento_id int not null,                
                nivel_id int not null,
                voz_principal int not null,

                foreign key (nivel_id) references Nivel(id),
                foreign key (voz_principal) references Voz(id),
                foreign key (instrumento_id) references Instrumento(id)
            );`
        );        
            
        await queryRunner.query(`
            create table MusicoCulto (
                id int primary key auto_increment,
                musico_id int not null,
                culto_id int not null,
                qtd_tocada int default 0,
                
                foreign key (musico_id) references Musico(id),
                foreign key (culto_id) references Culto(id),
                unique key (musico_id, culto_id)
            );`
        );

        await queryRunner.query(`
            create table MusicoVoz (
                id int primary key auto_increment,
                musico_id int not null,
                voz_id int not null,
                
                foreign key (musico_id) references Musico(id),
                foreign key (voz_id) references Voz(id)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("drop table MusicoCulto;");
        await queryRunner.query("drop table MusicoVoz;");
        await queryRunner.query("drop table Musico;");
        await queryRunner.query("drop table Instrumento;");
        await queryRunner.query("drop table Culto;");
        await queryRunner.query("drop table Nivel;");
        await queryRunner.query("drop table Voz;");
    }
}
