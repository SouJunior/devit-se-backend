import { Repository } from "typeorm";
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

    async findOneCompanyById(id: string): Promise<CompanyEntity> {
      return this.companyRepository.findOne({where: { id }})
   }

    async findOneCompanyByUserName(userName: string) {
        return this.companyRepository.findOne({ where: { companyUserName: userName }})
     }

     async findOneCompanyByCnpj(cnpj: string) {
      return this.companyRepository.findOne({ where: { cnpj }})
   }

     async updateCompany(data: CompanyEntity) {
        return this.companyRepository.save(data)
     }

     
}