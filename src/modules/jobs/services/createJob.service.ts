import { Injectable } from '@nestjs/common';
import { CreateJobDto } from '../dto/create-job.dto';
import { JobsRepository } from '../repositories/jobs.repositories';

@Injectable()
export class CreateJobService {
  constructor(private jobsRepository: JobsRepository) {}

  async execute(data: CreateJobDto) {
    return await this.jobsRepository.createNewJob(data)
  }
}
