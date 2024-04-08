import { Module } from '@nestjs/common';
import { RenduVousService } from './rendu-vous.service';
import { RenduVousController } from './rendu-vous.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { RenduVous } from './entities/rendu-vous.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RenduVous])],
  controllers: [RenduVousController],
  providers: [RenduVousService,JwtService],
})
export class RenduVousModule {}
