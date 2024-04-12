import { IsDate, IsString } from "class-validator";

export class CreateCreneauDto {
    @IsDate()
    date:Date;

    @IsString()
    hourStart:string;
    
    @IsString()
    hourend:string;

}
