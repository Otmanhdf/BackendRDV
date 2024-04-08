import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CentreService } from './centre.service';
import { CreateCentreDto } from './dto/create-centre.dto';
import { UpdateCentreDto } from './dto/update-centre.dto';

@Controller('centre')
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
}
