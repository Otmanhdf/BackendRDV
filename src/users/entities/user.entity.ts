import { IsEmail, IsStrongPassword, MinLength, minLength } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @MinLength(10)
    phone: string;

    @Column()
    @IsStrongPassword()
    pwd: string;

}
