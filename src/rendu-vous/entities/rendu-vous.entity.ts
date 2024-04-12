import { IsDate, IsString } from "class-validator";
import { Centre } from "src/centre/entities/centre.entity";
import { Creneau } from "src/creneau/entities/creneau.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
export enum etatRenduVous{
        VALID,
        PROCESSING,
        NOTVALID
}
@Entity()
export class RenduVous {
    @PrimaryGeneratedColumn()
    id:number;

    @IsDate()
    @Column()
     date:Date;

    @IsString()
    @Column()
    etat:etatRenduVous;

    @ManyToOne(()=>Centre, centre=>centre.renduVous)
    centre:Centre;

    @OneToOne(()=>User,user=>user.renduVous)
    user:User;

    @OneToOne(()=>Creneau,creneau=>creneau.renduVous)
    creneau:Creneau;
}
