import { IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class Region {
    @PrimaryGeneratedColumn()
    id:number;

    @IsString()
    label:string;
}
