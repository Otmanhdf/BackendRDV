import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CentreService } from './centre.service';
import { CreateCentreDto } from './dto/create-centre.dto';
import { UpdateCentreDto } from './dto/update-centre.dto';
import { UserGuard } from 'src/users/Guards/user.guard';

@Controller('centre')
@UseGuards(UserGuard)
export class CentreController {
  constructor(private readonly centreService: CentreService) {}

  @Post()
  create(@Body() createCentreDto: CreateCentreDto) {
    return this.centreService.create(createCentreDto);
  }

  @Get()
  findAll() {
    return this.centreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCentreDto: UpdateCentreDto) {
    return this.centreService.update(+id, updateCentreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centreService.remove(+id);
  }
  @Get('centres/:villeId')
  findByRegion(@Param('villeId') villeId: number) {
    return this.centreService.findByVile(villeId);
  }
}
