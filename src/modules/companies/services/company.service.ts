import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { CompanyRepository } from '../repositories/company.repository';

@Injectable()
export class CompanyService {
  constructor( private readonly companyRepository: CompanyRepository) {}

  async create(data: CreateCompanyDto) {
    await this.companyRepository.createCompany(data)
  }

  findAll() {
    return this.companyRepository.getAllCompanies()
  }

  findOne(id: number) {

  }
}
