import { IsString, isString } from "class-validator";

export class CreateVilleDto {
    @IsString()
    label:string ;
}
