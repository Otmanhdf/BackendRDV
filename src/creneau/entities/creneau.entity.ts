import { IsDate, IsString } from "class-validator";
import { Centre } from "src/centre/entities/centre.entity";
import { RenduVous } from "src/rendu-vous/entities/rendu-vous.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Creneau {
     @PrimaryGeneratedColumn()
     id :number;
    
    @Column()
    @IsDate()
    dateCreneau:Date;
    
    @IsString()
    @Column()
    hourStart:string;
    
    @IsString()
    @Column()
    hourend:string;

    @OneToOne(()=>RenduVous, renduVous=>renduVous.creneau)
    renduVous:RenduVous;

    @ManyToOne(()=>Centre, centre=>centre.creneaux)
    centre:Centre;
    
    }
