
import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty, length, Length } from 'class-validator';
import { Role } from '../enum/role.enum';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsNotEmpty()
    @IsString()
    prenom: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber('FR')
    @Length(10)
    phone: string;

    @IsNotEmpty()
    @IsString()
    pwd: string;
    
    @IsNotEmpty()
    @IsString()
    role:string;

    
}
