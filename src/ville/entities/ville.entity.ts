import { IsNotEmpty, IsString } from "class-validator";
import { Centre } from "src/centre/entities/centre.entity";
import { Region } from "src/region/entities/region.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Ville {
    @PrimaryGeneratedColumn()
    id:number
    
    @IsNotEmpty()
    @IsString()
    @Column()
    label:string

    @ManyToOne(() => Region, region => region.villes)
    region: Region;

    @OneToMany(()=>Centre, centre=>centre.ville)
    centres:Centre[];

    

}
