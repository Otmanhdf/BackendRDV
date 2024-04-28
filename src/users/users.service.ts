import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { signInDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';
import {SECRET_VALUE} from './../Variable/info';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private  jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const existingUser = await this.usersRepository.findOne({ where: { email: createUserDto.email } });
      if (existingUser) {
        return "user already exists";
      }
      
      const newUser = this.usersRepository.create(createUserDto);
      const savedUser = await this.usersRepository.save(newUser);
      return savedUser;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create user");
    }
  }
      
 async findAll(user:any) {
  if (user.role==='admin')
    return this.usersRepository.find()
  if (user.role==='user')
    return user;
  }

  async findOneById(id: number){
    return await this.usersRepository.findOne({ 
      where: {
      id: id,
  },}); 
  }
 async findByEmail(email: string){
  const user=await this.usersRepository.findOne({ 
    where: {email:email},}); 
    if(user!=null){
      return user
    }else{return null;}
 }

  async update(id: number, updateUserDto: UpdateUserDto){
    
    const user = await this.usersRepository.findOne({ 
      where: {
      id: id,
  },}); 

    if (!user) {
      return undefined;
    }
    user.nom = updateUserDto.nom ?? user.nom;
    user.prenom = updateUserDto.prenom ?? user.prenom;
    user.email = updateUserDto.email ?? user.email;
    user.phone = updateUserDto.phone ?? user.phone;
    user.pwd = updateUserDto.pwd ?? user.pwd;
    user.role = updateUserDto.role ?? user.role;

    await this.usersRepository.save(user);
    const access_token=this.generateJwtToken(user)
    return access_token;
    
  }

  async remove(id: number) {
    const res= await this.usersRepository.delete(id);
    return res
  }

  async login(signIn: signInDto) {
    const { email, pwd } = signIn;

    const user = await this.validateUser(email, pwd);
    if (user==null) {
      throw new HttpException('Invalid email or password', HttpStatus.BAD_REQUEST);
    }else{
      const access_token=this.generateJwtToken(user)
      return access_token;
    }
       
   
  }
  async generateJwtToken(user: User): Promise<string> {
    const payload = { user};
    const token= this.jwtService.sign(payload, { secret: SECRET_VALUE });

    return token;
  }
  async validateUser(email: string, pwd: string): Promise<any> {
    const user = await this.findByEmail(email);
    if (user!=null) {
      const isPasswordValid = await bcrypt.compare(pwd, user.pwd);
      if (isPasswordValid) {
        return user;
      }
      return null;
    }
    return null;
  }
}
