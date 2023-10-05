import { Repository } from "typeorm";
import { JobsEntity } from "../../../database/entities/Jobs.entity";
import { CreateJobDto } from "../dto/create-job.dto";
import { InjectRepository } from "@nestjs/typeorm";

export class JobsRepository {
    constructor(@InjectRepository(JobsEntity) private jobsRepository: Repository<JobsEntity>) {}
    async createNewJob(data: CreateJobDto) {
        await this.jobsRepository.save(data);
        return;
      }

    async getAllJobs() {
        await this.jobsRepository.find()
    }

    async getJobById(id: string) {
        await this.jobsRepository.find({ where: {id} })
    }
}