import { Module } from '@nestjs/common';
import { ServicesModule } from '@src/services/services.module';
import { FileController } from './file/file.controller';
import { EventSourceController } from './event-source/event-source.controller';
import { FileModule } from '@src/module/file/file.module';

@Module({
  imports: [
    ServicesModule,
    FileModule,
  ],
  controllers: [FileController, EventSourceController]
})
export class SharedModule { }
