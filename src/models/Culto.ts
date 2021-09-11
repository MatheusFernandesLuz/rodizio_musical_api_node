import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Culto")
export class Culto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}