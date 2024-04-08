import { Module } from '@nestjs/common';
import { CentreService } from './centre.service';
import { CentreController } from './centre.controller';

@Module({
  controllers: [CentreController],
  providers: [CentreService],
})
export class CentreModule {}
