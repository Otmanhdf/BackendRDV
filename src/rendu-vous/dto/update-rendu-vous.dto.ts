import { PartialType } from '@nestjs/mapped-types';
import { CreateRenduVousDto } from './create-rendu-vous.dto';

export class UpdateRenduVousDto extends PartialType(CreateRenduVousDto) {}
