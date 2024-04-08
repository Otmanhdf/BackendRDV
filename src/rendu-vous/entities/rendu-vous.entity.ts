import { IsString } from "class-validator";
import { PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
export enum etatRenduVous{
        VALID,
        PROCESSING,
        NOTVALID
}
export class RenduVous {
    @PrimaryGeneratedColumn()
    id:number;

    @IsString()
    label:string;

    
    @IsString()
    adress:string;

    @IsString()
    etat:etatRenduVous;
}
