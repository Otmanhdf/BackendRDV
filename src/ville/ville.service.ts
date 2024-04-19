import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ville } from './entities/ville.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class VilleService {
  constructor( 
    @InjectRepository(Ville)
  private villeRepository: Repository<Ville>,
  private jwtService: JwtService){

  }
 
  async findAll() {
    return await this.villeRepository.find()
  }

  async findOne(id: number) {
    return await this.villeRepository.findOne({where:{id}});
  }

  async remove(id: number) {
    return  await this.villeRepository.delete(id);
  }
 
  async findByRegion(regionId: number) {
    return await this.villeRepository.find({ where: { region: { id: regionId } } });
  }
}
