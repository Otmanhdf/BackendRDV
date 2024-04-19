import { IsNumber, IsString } from "class-validator";

export class CreateCentreDto {
    @IsString()
    label:string;
    
    @IsNumber()
    size:number
}
