import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CreneauService } from './creneau.service';
import { CreateCreneauDto } from './dto/create-creneau.dto';
import { UpdateCreneauDto } from './dto/update-creneau.dto';
import { UserGuard } from 'src/users/Guards/user.guard';

@Controller('creneau')
@UseGuards(UserGuard)
export class CreneauController {
  constructor(private readonly creneauService: CreneauService) {}

  @Post()
  create(@Body() createCreneauDto: CreateCreneauDto) {
    return this.creneauService.create(createCreneauDto);
  }

  @Get()
  findAll() {
    return this.creneauService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creneauService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creneauService.remove(+id);
  }
}
