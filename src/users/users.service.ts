import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { signInDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private  jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
  const res=await this.usersRepository.save(createUserDto)
    return res;
  }

 findAll() {
  const users=this.usersRepository.find()
   return users;
  }

  async findOneById(id: number): Promise<User | undefined> {
    return await this.usersRepository.findOne({ 
      where: {
      id: id,
  },}); 
  }
 async findByEmail(email: string) :Promise<User | undefined>{
  return await this.usersRepository.findOne({ 
    where: {email:email},}); 
 }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    
    const user = await this.findOneById(id);

    if (!user) {
      return undefined;
    }
    user.nom = updateUserDto.nom ?? user.nom;
    user.prenom = updateUserDto.prenom ?? user.prenom;
    user.email = updateUserDto.email ?? user.email;
    user.phone = updateUserDto.phone ?? user.phone;
    user.pwd = updateUserDto.pwd ?? user.pwd;

    await this.usersRepository.save(user);

    return user; 
  }

  async remove(id: number) {
    const res= await this.usersRepository.delete(id);
    return res
  }

  async login(signIn: signInDto) {
    const { email, pwd } = signIn;

    const user = await this.validateUser(email, pwd);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
       const access_token=this.generateJwtToken(user)

      return {  access_token };
   
  }
  // async validateToken(token: string): Promise<any> {
  //   try {
  //     const decoded = await this.jwtService.verifyAsync(token);
  //     return decoded;
  //   } catch (error) {
  //     return null; 
  //   }
  // }
  async generateJwtToken(user: User): Promise<string> {
    const payload = { id: user.id, email: user.email };
    return this.jwtService.sign(payload);
  }
  async validateUser(email: string, pwd: string): Promise<any> {
    const user = await this.findByEmail(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(pwd, user.pwd);
      if (isPasswordValid) {
        return user;
      }
      return "password invalid"
    }
    return null;
  }
}
