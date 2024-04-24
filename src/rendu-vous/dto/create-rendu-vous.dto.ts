import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateRenduVousDto {
    @IsDateString()
    date:Date

    @IsString()
    etat:string;

}
