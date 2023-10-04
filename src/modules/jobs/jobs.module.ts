import { Module } from '@nestjs/common';
import { GetOneJobByIdService } from './services/getOneJob.service';
import { JobsController } from './jobs.controller';
import { CreateJobService } from './services/createJob.service';
import { GetAllJobsService } from './services/getAllJobs.service';
import { JobsRepository } from './repositories/jobs.repositories';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobsRepository])
  ],
  controllers: [JobsController],
  providers: [CreateJobService, GetAllJobsService, GetOneJobByIdService, JobsRepository]
})
export class JobsModule {}
