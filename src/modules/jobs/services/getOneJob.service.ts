import { Injectable } from '@nestjs/common';
import { JobsRepository } from '../repositories/jobs.repositories';

@Injectable()
export class GetOneJobByIdService {
  constructor(private jobsRepository: JobsRepository) {}

  async execute(id: string) {
    return await this.jobsRepository.getJobById(id)
  }
}
