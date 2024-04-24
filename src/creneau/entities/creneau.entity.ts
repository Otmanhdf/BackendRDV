import {  IsString } from "class-validator";
import { Centre } from "src/centre/entities/centre.entity";
import { RenduVous } from "src/rendu-vous/entities/rendu-vous.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Creneau {
     @PrimaryGeneratedColumn()
     id :number;
    
    @Column()
    @IsString()
    hourend:string;
    
    @IsString()
    @Column()
    hourStart:string;

    @IsString()
    @Column()
    jour:string;
    
    
    @OneToMany(()=>RenduVous,renduVous=>renduVous.creneau)
    renduVous:RenduVous[];

    @ManyToMany(()=>Centre, centre=>centre.creneau)
    centre:Centre[];
    
    }
