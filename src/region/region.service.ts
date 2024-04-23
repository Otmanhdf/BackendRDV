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
  async insertRegions(): Promise<void> {
    const regionsData = [
      'Tanger-Tetouan-Al Hoceima',
      'Oriental',
      'Fès-Meknès',
      'Rabat-Salé-Kénitra',
      'Béni Mellal-Khénifra',
      'Casablanca-Settat',
      'Marrakech-Safi',
      'Drâa-Tafilalet',
      'Souss-Massa',
      'Guelmim-Oued Noun',
      'Laayoune-Sakia El Hamra',
      'Eddakhla-Oued Eddahab',
    ];

    for (const label of regionsData) {
      const region = this.regionRepository.create({ label });
      await this.regionRepository.save(region);
    }
  }
}
