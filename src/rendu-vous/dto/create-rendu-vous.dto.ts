import { IsDate, IsString } from "class-validator";
import { etatRenduVous } from "../entities/rendu-vous.entity";

export class CreateRenduVousDto {
    @IsDate()
    date:Date

    @IsString()
    etat:etatRenduVous;
}
