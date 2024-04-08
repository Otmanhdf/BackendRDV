
import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
    @IsString()
    nom: string;

    @IsString()
    prenom: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('FR')
    phone: string;

    @IsString()
    pwd: string;

    
}
