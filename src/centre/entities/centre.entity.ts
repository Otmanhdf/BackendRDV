import { IsString } from "class-validator";
import { Creneau } from "src/creneau/entities/creneau.entity";
import { RenduVous } from "src/rendu-vous/entities/rendu-vous.entity";
import { Ville } from "src/ville/entities/ville.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Centre {

    @PrimaryGeneratedColumn()
    id:number;

    @IsString()
    @Column()
    label:string;

    @IsString()
    @Column()
    adress:string;

    @ManyToOne(()=>Ville,ville=>ville.centres)
    ville:Ville;

    @OneToMany(()=>RenduVous,renduVous=>renduVous.centre)
    renduVous:RenduVous[];

    @OneToMany(() => Creneau, creneau => creneau.centre)
    creneaux: Creneau[];
}
