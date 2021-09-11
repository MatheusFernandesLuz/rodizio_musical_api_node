import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Musico } from "./Musico";

@Entity("Rodizio")
export class Rodizio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  data_rodizio: Date;

  @Column()
  culto_id: number;

  @ManyToMany(() => Musico)
  @JoinTable({
    name: "musicorodizio",
    joinColumn: { name: "rodizio_id"},
    inverseJoinColumn: { name: "musico_id" }
  })
  musicos: Musico[];
}