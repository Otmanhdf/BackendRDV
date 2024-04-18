import { IsDateString, IsString } from "class-validator";
import { etatRenduVous } from "../entities/rendu-vous.entity";

export class CreateRenduVousDto {
    @IsDateString()
    date:Date

    @IsString()
    etat:string;
}
