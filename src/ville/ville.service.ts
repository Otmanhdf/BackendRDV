import { Injectable } from '@nestjs/common';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ville } from './entities/ville.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { error } from 'console';

@Injectable()
export class VilleService {
  constructor( 
    @InjectRepository(Ville)
  private villeRepository: Repository<Ville>,
  private jwtService: JwtService){

  }
  async create(createVilleDto: CreateVilleDto) {
    const res=await this.villeRepository.save(createVilleDto)
    return res
  }

  async findAll() {
    return await this.villeRepository.find()
  }

  async findOne(id: number) {
    return await this.villeRepository.findOne({where:{id}});
  }

  async update(id: number, updateVilleDto: UpdateVilleDto) {
    const ville=await this.findOne(id);
    if (!ville){
      return "not found";
    }
    const villeUpdate=this.updateVille(ville,updateVilleDto)
    const res=await this.villeRepository.save(villeUpdate);
    return res
  }

  async remove(id: number) {
    return  await this.villeRepository.delete(id);
  }
  updateVille(ville:CreateVilleDto,updateVille:UpdateVilleDto){
    ville.label=updateVille.label?? ville.label;
    return ville;
  }
  async findByRegion(regionId: number) {
    return await this.villeRepository.find({ where: { region: { id: regionId } } });
  }
}
