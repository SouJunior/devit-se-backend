import { Module } from '@nestjs/common';
import { GetOneJobByIdService } from './services/getOneJob.service';
import { JobsController } from './jobs.controller';
import { CreateJobService } from './services/createJob.service';
import { GetAllJobsService } from './services/getAllJobs.service';
import { JobsRepository } from './repositories/jobs.repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsEntity } from 'src/database/entities/Jobs.entity';
import { PassportModule } from '@nestjs/passport';
import { CompanyModule } from '../companies/company.module';
import { CompanyRepository } from '../companies/repositories/company.repository';
import { CompanyEntity } from 'src/database/entities/company.entity';

@Module({
  imports: [
    CompanyModule,
    TypeOrmModule.forFeature([JobsRepository, JobsEntity, CompanyEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [JobsController],
  providers: [CreateJobService, GetAllJobsService, GetOneJobByIdService, JobsRepository, CompanyRepository]
})
export class JobsModule {}
