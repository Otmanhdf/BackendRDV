import { IsString } from "class-validator";
import { etatRenduVous } from "../entities/rendu-vous.entity";

export class CreateRenduVousDto {
    @IsString()
    label:string;


    @IsString()
    adress:string;

    @IsString()
    etat:etatRenduVous;
}
