import { Module } from '@nestjs/common';
import { CreneauService } from './creneau.service';
import { CreneauController } from './creneau.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Creneau } from './entities/creneau.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Creneau])],
  controllers: [CreneauController],
  providers: [CreneauService,JwtService],
})
export class CreneauModule {}
