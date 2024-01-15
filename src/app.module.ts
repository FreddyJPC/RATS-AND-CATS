import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { RatsController } from './rats/rats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, RatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
