import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GetOneJobByIdService} from './services/getOneJob.service';
import { CreateJobDto } from './dto/create-job.dto';
import { CreateJobService } from './services/createJob.service';
import { GetAllJobsService } from './services/getAllJobs.service';

@Controller('jobs')
export class JobsController {
  constructor(
    private readonly createJobService: CreateJobService,
    private readonly getAllJobsService: GetAllJobsService,
    private readonly getOneJobByIdService: GetOneJobByIdService
    ) {}

  @Post()
  create(@Body() data: CreateJobDto) {
    return this.createJobService.execute(data);
  }

  @Get()
  findAll() {
    return this.getAllJobsService.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getOneJobByIdService.execute(id);
  }

}