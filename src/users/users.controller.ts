import { Controller, Get, Post, Body, Patch, Param, Delete ,Query, UnauthorizedException, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { signInDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.pwd=await bcrypt.hash(createUserDto.pwd, 12);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param('id') id: number) {
    return this.usersService.findOneById(id);
  }
  @Get("user/:email")
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  
  @Post('login')
  async login(@Body() signInDto: signInDto) {
   return this.usersService.login(signInDto);
  }
  
}
