import { EntityManager, Repository } from "typeorm";
import { CreateCompanyDto } from "../dto/create-company.dto";
import { CompanyEntity } from "src/database/entities/company.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CompanyRepository {
    constructor(@InjectRepository(CompanyEntity) private companyRepository: Repository<CompanyEntity>) {}
    async createCompany(data: CreateCompanyDto) {
        return this.companyRepository.save(data)
    }

    async getAllCompanies() {
       return this.companyRepository.find()
    }
}