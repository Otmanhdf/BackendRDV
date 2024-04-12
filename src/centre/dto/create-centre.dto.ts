import { IsString } from "class-validator";

export class CreateCentreDto {
    @IsString()
    label:string;
    
    @IsString()
    adress:string;
}
