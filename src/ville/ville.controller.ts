import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VilleService } from './ville.service';

import { UserGuard } from 'src/users/Guards/user.guard';

@Controller('ville')
@UseGuards(UserGuard)
export class VilleController {
  constructor(private readonly villeService: VilleService) {}

  @Get()
  findAll() {
    return this.villeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.villeService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.villeService.remove(+id);
  }

  @Get('villes/:regionId')
  findByRegion(@Param('regionId') regionId: number) {
    return this.villeService.findByRegion(regionId);
  }
}
