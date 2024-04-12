import { Module } from '@nestjs/common';
import { CentreService } from './centre.service';
import { CentreController } from './centre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Centre } from './entities/centre.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Centre])],
  controllers: [CentreController],
  providers: [CentreService,JwtService],
})
export class CentreModule {}
