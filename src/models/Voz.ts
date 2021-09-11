import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Musico } from "./Musico";

@Entity("Voz")
export class Voz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Musico, musico => musico.id)
  musico: Musico[];
}