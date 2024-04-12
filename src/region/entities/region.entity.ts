import { IsString } from "class-validator";
import { Ville } from "src/ville/entities/ville.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Region {
    @PrimaryGeneratedColumn()
    id:number;

    @IsString()
    @Column()
    label:string;

    @OneToMany(() => Ville, ville => ville.region)
    villes: Ville[];
}
