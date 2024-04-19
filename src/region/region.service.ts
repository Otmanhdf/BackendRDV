import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from './entities/region.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
    private jwtService:JwtService
){}
  
  async findAll() {
    return await this.regionRepository.find();
  }

  async findOne(id: number) {
    return await this.regionRepository.findOne({where:{id:id}});
  }

  async remove(id: number) {
    return await this.regionRepository.delete(id);
  }
  
}
