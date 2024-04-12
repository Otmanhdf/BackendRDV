import { Injectable } from '@nestjs/common';
import { CreateCentreDto } from './dto/create-centre.dto';
import { UpdateCentreDto } from './dto/update-centre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Centre } from './entities/centre.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CentreService {
  constructor( 
    @InjectRepository(Centre)
  private centreRepository: Repository<Centre>,
  private jwtService: JwtService){

  }
  async create(createCentreDto: CreateCentreDto) {
    const res=await this.centreRepository.save(createCentreDto)
    return res
  }

  async findAll() {
    return await this.centreRepository.find()
  }

  async findOne(id: number) {
    return await this.centreRepository.findOne({where:{id}});
  }

  async update(id: number, updateCentreDto: UpdateCentreDto) {
    const centre=await this.findOne(id)

    if(!centre){
      return " Centre not found"
    }
    const centreUpdate=this.updateCnetre(centre,updateCentreDto)
    return this.create(centreUpdate);
  }

  async remove(id: number) {
    return  await this.centreRepository.delete(id);
  }
  updateCnetre(centre:CreateCentreDto,updatecentre:UpdateCentreDto){
    centre.label=updatecentre.label?? centre.label;
    centre.adress=updatecentre.adress?? centre.adress;
    return centre;
  }
}
