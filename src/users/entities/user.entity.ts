import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength, isNotEmpty, minLength } from 'class-validator';
import { RenduVous } from 'src/rendu-vous/entities/rendu-vous.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany, Unique } from 'typeorm';
import { Role } from '../enum/role.enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    nom: string;

    @IsNotEmpty()
    @Column()
    prenom: string;

    
    @IsNotEmpty()
    @IsEmail()
    @Column({unique:true})
    email: string;

    @IsNotEmpty()
    @Column()
    @MinLength(10)
    phone: string;

    @IsNotEmpty()
    @MinLength(6)
    @Column()
    pwd: string;

    @Column({
        type:'enum',
        enum:Role,
        default:Role.USER
    })
    role:string;

    @OneToMany(()=>RenduVous,renduVous=>renduVous.user)
    @JoinColumn()
    renduVous:RenduVous[];
}
