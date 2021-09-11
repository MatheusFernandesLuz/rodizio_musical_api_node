import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Musico } from "./Musico";

@Entity("instrumento")
export class Instrumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Musico, musico => musico.id)
  musicos: Musico[];
}