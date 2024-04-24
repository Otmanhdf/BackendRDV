import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule, JwtModuleOptions, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './Guards/jwt.strategy';
import { SECRET_VALUE } from 'src/Variable/info';

const jwtConfig:JwtModuleOptions={
  global: true,
  secret:SECRET_VALUE,
  signOptions: { expiresIn: '60s' },
}
@Module({
  imports: [TypeOrmModule.forFeature([User]),JwtModule.register(jwtConfig),],
  controllers: [UsersController],
  providers: [UsersService,JwtService,JwtStrategy],
})
export class UsersModule {}
