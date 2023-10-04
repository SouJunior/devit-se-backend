import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { JobsDraftsService } from './services/jobs-drafts.service';
import { CreateJobDto } from '../jobs/dto/create-job.dto';

@Controller('jobs-drafts')
export class JobsDraftsController {
  constructor(private readonly jobsDraftsService: JobsDraftsService) {}

  @Post()
  create(@Body() createJobsDraftDto: CreateJobDto) {
    return this.jobsDraftsService.create(createJobsDraftDto);
  }

  @Get()
  findAll() {
    return this.jobsDraftsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobsDraftsService.findOne(+id);
  }
}
