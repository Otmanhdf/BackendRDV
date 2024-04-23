import { IsDate, IsString } from "class-validator";

export class CreateCreneauDto {
  
    @IsString()
    hourStart:string;

    @IsString()
    hourend:string;

    @IsString()
    jour:string;
    

}
