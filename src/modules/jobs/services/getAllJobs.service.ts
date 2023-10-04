import { Injectable } from '@nestjs/common';
import { JobsRepository } from '../repositories/jobs.repositories';

@Injectable()
export class GetAllJobsService {
  constructor(private jobsRepository: JobsRepository) {}

  async execute() {
    return await this.jobsRepository.getAllJobs()
  }
}
