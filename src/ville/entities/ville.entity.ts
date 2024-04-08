import { IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Ville {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    @IsString()
    label:string

}
