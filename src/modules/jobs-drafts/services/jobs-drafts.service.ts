import { Injectable } from '@nestjs/common';
import { CreateJobDto } from '../../jobs/dto/create-job.dto';
import { UpdateJobDto } from '../../jobs/dto/update-job.dto';

@Injectable()
export class JobsDraftsService {
  
  create(createJobsDraftDto: CreateJobDto) {
  }

  findAll() {
  }

  findOne(id: number) {
  }
}
