import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("musicorodizio")
export class MusicoRodizio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  musico_id: number;

  @Column()
  rodizio_id: number;

  @Column()
  voz_id: number;
}