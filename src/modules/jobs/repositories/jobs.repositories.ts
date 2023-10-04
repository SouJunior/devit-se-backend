import { Repository } from "typeorm";
import { JobsEntity } from "../../../database/entities/Jobs.entity";
import { CreateJobDto } from "../dto/create-job.dto";

export class JobsRepository extends Repository<JobsEntity> {
    async createNewJob(data: CreateJobDto) {
        await this.save(data);
        return;
      }

    async getAllJobs() {
        await this.find()
    }

    async getJobById(id: string) {
        await this.find({ where: {id} })
    }
}