import { Injectable } from '@nestjs/common';
import { CreateCreneauDto } from './dto/create-creneau.dto';
import { Repository } from 'typeorm';
import { Creneau } from './entities/creneau.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreneauService {
constructor(
  @InjectRepository(Creneau)
  private creneauRepository:Repository<Creneau>,
   private jwtService:JwtService

){}

  async create(createCreneauDto: CreateCreneauDto) {
    const res=await this.creneauRepository.save(createCreneauDto)
    return res;
  }

  async findAll() {
    return await this.creneauRepository.find()
  }

  async findOne(id: number) {
    return await this.creneauRepository.findOne({where:{id}});
  }

  async remove(id: number) {
    return await this.creneauRepository.delete(id);
  }
}
