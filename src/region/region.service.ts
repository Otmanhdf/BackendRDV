import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
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
  async create(createRegionDto: CreateRegionDto) {
    const res= await this.regionRepository.save(createRegionDto);
    return res;
  }

  async findAll() {
    return await this.regionRepository.find();
  }

  async findOne(id: number) {
    return await this.regionRepository.findOne({where:{id:id}});
  }

 async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region= await this.findOne(id)
    if(!region){
      return "not found"
    }
    region.label=updateRegionDto.label??region.label;
    
    return await this.regionRepository.save(region) ;
  }

  async remove(id: number) {
    return await this.regionRepository.delete(id);
  }
  updateRegion(region:CreateRegionDto,updateRegion:UpdateRegionDto){
    region.label=updateRegion.label?? region.label;
    return region;
  }
}
