import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { GetOneJobByIdService} from './services/getOneJob.service';
import { CreateJobDto } from './dto/create-job.dto';
import { CreateJobService } from './services/createJob.service';
import { GetAllJobsService } from './services/getAllJobs.service';
import { AuthGuard } from '@nestjs/passport';
import { LoggedEntity } from '../auth/decorator/loggedEntity.decorator';
import { CompanyEntity } from 'src/database/entities/company.entity';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('jobs')
export class JobsController {
  constructor(
    private readonly createJobService: CreateJobService,
    private readonly getAllJobsService: GetAllJobsService,
    private readonly getOneJobByIdService: GetOneJobByIdService
    ) {}

    @Post()
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
  async createJob(
    @LoggedEntity() company: CompanyEntity,
    @Body() data: CreateJobDto
    ) {
    return this.createJobService.execute(data, company);
  }

  @Get()
  async findAllJobs() {
    return this.getAllJobsService.execute();
  }

  @Get(':id')
  async findOneJob(@Param('id') id: string) {
    return this.getOneJobByIdService.execute(id);
  }

}