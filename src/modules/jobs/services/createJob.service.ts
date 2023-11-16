import { Injectable } from '@nestjs/common';
import { CreateJobDto } from '../dto/create-job.dto';
import { JobsRepository } from '../repositories/jobs.repositories';
import { CompanyEntity } from 'src/database/entities/company.entity';

@Injectable()
export class CreateJobService {
  constructor(private jobsRepository: JobsRepository) {}

  async execute(data: CreateJobDto, company: CompanyEntity): Promise<{status: number, message: string}> {

    const {id, companyName} = company

    data.company_id = id;
    data.companyName = companyName
    
    try {
    await this.jobsRepository.createNewJob(data)
    } catch {
      return {
        status: 400,
        message: "Something went wrong"
      }
    }

    return {
      status: 201,
      message: "Job ceated successfully"
    }
  }
}
