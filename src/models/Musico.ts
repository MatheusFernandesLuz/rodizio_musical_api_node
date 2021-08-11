import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable, Unique, ManyToOne } from "typeorm";
import { Culto } from "./Culto";
import { Nivel } from "./Nivel";
import { Voz } from "./Voz";

@Entity("musico")
export class Musico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  celular: string;

  @Column()
  franqueza: number;

  @ManyToOne(() => Nivel, nivel => nivel.id, { nullable: false })
  nivel: Nivel;
    
  @Column()
  instrumento: string;

  @ManyToMany(() => Voz)
  @JoinTable()
  vozes: Voz[];

  @ManyToMany(() => Culto)
  @JoinTable()
  cultos: Culto[];
}