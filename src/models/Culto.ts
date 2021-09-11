import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("culto")
export class Culto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}