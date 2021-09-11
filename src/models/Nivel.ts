import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Musico } from "./Musico";

@Entity("nivel")
export class Nivel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Musico, musico => musico.id)
  musicos: Musico[];
}