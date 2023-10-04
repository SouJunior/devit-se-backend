import { Module } from '@nestjs/common';
import { JobsDraftsService } from './services/jobs-drafts.service';
import { JobsDraftsController } from './jobs-drafts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsRepository } from '../jobs/repositories/jobs.repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobsRepository])
  ],
  controllers: [JobsDraftsController],
  providers: [JobsDraftsService]
})
export class JobsDraftsModule {}
