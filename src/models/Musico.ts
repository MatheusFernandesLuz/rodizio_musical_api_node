import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm";
import { Culto } from "./Culto";
import { Instrumento } from "./Instrumento";
import { Nivel } from "./Nivel";
import { Voz } from "./Voz";

@Entity("Musico")
export class Musico {
  @PrimaryGeneratedColumn()    
  id: number;

  @Column()
  nome: string;

  @Column()
  celular: string;

  @ManyToOne(() => Nivel, nivel => nivel.musicos)
  @JoinColumn({ name: "nivel_id" })
  nivel: Nivel;  
    
  @ManyToOne(() => Instrumento, instrumento => instrumento.musicos)
  @JoinColumn({ name: "instrumento_id" })
  instrumento: Instrumento;

  @Column()
  voz_principal: number;

  @ManyToMany(() => Voz)
  @JoinTable({
    name: "musicovoz",
    joinColumn: { name: "musico_id"},
    inverseJoinColumn: { name: "voz_id" }
  })
  vozes: Voz[];

  @ManyToMany(() => Culto)
  @JoinTable({
    name: "musicoculto",
    joinColumn: { name: "musico_id"},
    inverseJoinColumn: { name: "culto_id" }
  })
  cultos: Culto[];
}