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
    private jwtService: JwtService
  ) {}

  async create(createCreneauDto: CreateCreneauDto) {
    // Vérifier si le jour du créneau est un dimanche ou le samedi après midi
    const jour = createCreneauDto.jour.toLowerCase();
    if (jour === 'dimanche' || (jour === 'samedi' && createCreneauDto.hourStart >= '14:00')) {
      throw new BadRequestException('Créneau non disponible pour les jours exceptionnels');
    }

    // Vérifier si le jour est différent de dimanche et samedi après midi
    if (jour !== 'dimanche' && jour !== 'samedi' && createCreneauDto.hourStart >= '18:00') {
      throw new BadRequestException('Créneau non disponible après 18h pour les jours autres que samedi et dimanche');
    }

    // Vérifier si le jour est différent de dimanche
    if (jour !== 'dimanche') {
      const creneauxDuJour = await this.creneauRepository.count({ where: { jour } });
      if (creneauxDuJour >= 8) {
        throw new BadRequestException('Limite de créneaux atteinte pour ce jour');
      }
    }

    const res = await this.creneauRepository.save(createCreneauDto);
    return res;
  }

  async findAll() {
    // Filtrer les créneaux pour exclure les jours exceptionnels
    const creneaux = await this.creneauRepository.find();
    return creneaux.filter(creneau => !this.isExceptionalDay(creneau.jour));
  }

  async findOne(id: number) {
    const creneau = await this.creneauRepository.findOne({ where: { id } });
    // Vérifier si le créneau trouvé est un jour exceptionnel
    if (creneau && this.isExceptionalDay(creneau.jour)) {
      throw new BadRequestException('Créneau non disponible pour les jours exceptionnels');
    }
    return creneau;
  }
  async findByJour(jour: string) {
    const creneau = await this.creneauRepository.find({ where: { jour } });
    return creneau;
  }
  async remove(id: number) {
    // Vérifier si le créneau à supprimer est un jour exceptionnel
    const creneau = await this.findOne(id);
    if (this.isExceptionalDay(creneau.jour)) {
      throw new BadRequestException('Impossible de supprimer un créneau pour les jours exceptionnels');
    }
    return await this.creneauRepository.delete(id);
  }

  private isExceptionalDay(jour: string): boolean {
    // Vérifier si le jour est un dimanche ou le samedi après midi
    return jour.toLowerCase() === 'dimanche' || (jour.toLowerCase() === 'samedi' );
  }

}
