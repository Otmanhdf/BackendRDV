import { Injectable } from '@nestjs/common';
import { CreateRenduVousDto } from './dto/create-rendu-vous.dto';
import { UpdateRenduVousDto } from './dto/update-rendu-vous.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RenduVous } from './entities/rendu-vous.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RenduVousService {
  constructor(
    @InjectRepository(RenduVous)
    private renduVousRepository:Repository<RenduVous>,
    private jwtService:JwtService

){}
  async create(createRenduVousDto: CreateRenduVousDto) {
    const res=await this.renduVousRepository.save(createRenduVousDto)
    return res;
  }

  async findAll() {
    return await this.renduVousRepository.find()
  }

  async findOne(id: number) {
    return await this.renduVousRepository.findOne({where:{id}});
  }

  update(id: number, updateRenduVousDto: UpdateRenduVousDto) {
    return `This action updates a #${id} renduVous`;
  }

  async remove(id: number) {
    return await this.renduVousRepository.delete(id);
  }
}
