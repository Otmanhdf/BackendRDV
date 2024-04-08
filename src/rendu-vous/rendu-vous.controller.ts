import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RenduVousService } from './rendu-vous.service';
import { CreateRenduVousDto } from './dto/create-rendu-vous.dto';
import { UpdateRenduVousDto } from './dto/update-rendu-vous.dto';

@Controller('rendu-vous')
export class RenduVousController {
  constructor(private readonly renduVousService: RenduVousService) {}

  @Post()
  create(@Body() createRenduVousDto: CreateRenduVousDto) {
    return this.renduVousService.create(createRenduVousDto);
  }

  @Get()
  findAll() {
    return this.renduVousService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.renduVousService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRenduVousDto: UpdateRenduVousDto) {
    return this.renduVousService.update(+id, updateRenduVousDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.renduVousService.remove(+id);
  }
}
