import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { RegionService } from './region.service';
import { UserGuard } from 'src/users/Guards/user.guard';

@Controller('region')
@UseGuards(UserGuard)
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
