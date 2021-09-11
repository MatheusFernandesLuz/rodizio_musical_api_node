import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("musicovoz")
export class MusicoVoz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  musico_id: number;

  @Column()
  voz_id: number;
}