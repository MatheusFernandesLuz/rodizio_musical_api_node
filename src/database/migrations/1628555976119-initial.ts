import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1628555976119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            create table Voz (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );

        queryRunner.query(`
            create table Nivel (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );


        queryRunner.query(`
            create table Culto (
                id int primary key auto_increment,
                nome varchar(255) not null
            );`
        );
        

        queryRunner.query(`
            create table Instrumento (
                id int primary key auto_increment,
                nome varchar(255) not null,
                voz_principal_id int not null,
                voz_alternativa_id int,
                
                foreign key (voz_principal_id) references Voz(id),
                foreign key (voz_alternativa_id) references Voz(id)
            );`
        );          
                 
        queryRunner.query(`
            create table Musico (
                id int primary key auto_increment,
                nome varchar(255) not null,
                instrumento_id int not null,
                nivel_id int not null
            );`
        );        
            
        queryRunner.query(`
            create table MusicoCulto (
                id int primary key auto_increment,
                musico_id int not null,
                culto_id int not null,
                
                foreign key (musico_id) references Musico(id),
                foreign key (culto_id) references Culto(id)
            );`
        );                     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table MusicoCulto;
            drop table Musico;
            drop table Instrumento;
            drop table Culto;
            drop table Nivel;
            drop table Voz;
        `);
    }

}
