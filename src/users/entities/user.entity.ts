import { IsEmail, IsStrongPassword, MinLength, minLength } from 'class-validator';
import { RenduVous } from 'src/rendu-vous/entities/rendu-vous.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

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
    pwd: string;

    @OneToOne(()=>RenduVous,renduVous=>renduVous.user)
    renduVous:RenduVous;
}
