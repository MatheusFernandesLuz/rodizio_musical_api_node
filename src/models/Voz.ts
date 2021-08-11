import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Musico } from "./Musico";

@Entity("voz")
export class Voz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}