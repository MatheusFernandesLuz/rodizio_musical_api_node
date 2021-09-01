import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("musicoculto")
export class MusicoCulto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  musico_id: number;

  @Column()
  culto_id: number;

  @Column()
  qtd_tocada: number;
}