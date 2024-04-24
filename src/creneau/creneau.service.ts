import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCreneauDto } from './dto/create-creneau.dto';
import { Repository } from 'typeorm';
import { Creneau } from './entities/creneau.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { IsString } from 'class-validator';

@Injectable()
export class CreneauService {
  constructor(
    @InjectRepository(Creneau)
    private creneauRepository: Repository<Creneau>,
   
  ) {}

  async create(createCreneauDto: CreateCreneauDto) {
    const res = await this.creneauRepository.save(createCreneauDto);
    return res;
  }

  async findAll() {
    const creneaux = await this.creneauRepository.find();
    return creneaux
  }

  async findOne(id: number) {
    const creneau = await this.creneauRepository.findOne({ where: { id } });
    return creneau;
  }
  async findByJour(jour: string) {
    const creneau = await this.creneauRepository.find({ where: { jour } });
    return creneau;
  }
  async remove(id: number) {
    return await this.creneauRepository.delete(id);
  }

}
