import { IsDate, IsDateString, IsString } from "class-validator";
import { Centre } from "src/centre/entities/centre.entity";
import { Creneau } from "src/creneau/entities/creneau.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
export enum etatRenduVous{
        VALID,
        PROCESSING,
        NOTVALID
}
@Entity()
export class RenduVous {
    @PrimaryGeneratedColumn()
    id:number;

    @IsDateString()
    @Column()
     date:Date;

    
    @Column({
        type:'enum',
        enum: etatRenduVous,
        default:etatRenduVous.PROCESSING,
    })
    etat:string;

    @ManyToOne(()=>Centre, centre=>centre.renduVous)
    centre:Centre;


    @ManyToOne(()=>Creneau,creneau=>creneau.renduVous)
    @JoinColumn()
    creneau:Creneau;


    @ManyToOne(()=>User,user=>user.renduVous)
    @JoinColumn()
    user:User;

   
}
