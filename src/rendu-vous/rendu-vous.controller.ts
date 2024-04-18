import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { RenduVousService } from './rendu-vous.service';
import { CreateRenduVousDto } from './dto/create-rendu-vous.dto';
import { UpdateRenduVousDto } from './dto/update-rendu-vous.dto';
import { UserGuard } from 'src/users/Guards/user.guard';
import { Request } from 'express';

@Controller('rendu-vous')
export class RenduVousController {
  constructor(private readonly renduVousService: RenduVousService) {}

  @Post()
  @UseGuards(UserGuard)
  create(@Body() createRenduVousDto: CreateRenduVousDto,@Req() req:Request) {
    return this.renduVousService.create(createRenduVousDto);
  }

  @Get()
  @UseGuards(UserGuard)
  findAll() {
    return this.renduVousService.findAll();
  }

  @Get(':id')
  @UseGuards(UserGuard)
  findOne(@Param('id') id: string) {
    return this.renduVousService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(UserGuard)
  update(@Param('id') id: string, @Body() updateRenduVousDto: UpdateRenduVousDto) {
    return this.renduVousService.update(+id, updateRenduVousDto);
  }

  @Delete(':id')
  @UseGuards(UserGuard)
  remove(@Param('id') id: string) {
    return this.renduVousService.remove(+id);
  }
}
