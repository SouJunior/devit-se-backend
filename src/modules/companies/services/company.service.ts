import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { CompanyRepository } from '../repositories/company.repository';
import * as bcrypt from "bcrypt"
import { CompanyEntity } from 'src/database/entities/company.entity';

@Injectable()
export class CompanyService {
  constructor( private readonly companyRepository: CompanyRepository) {}

  async createCompany (data: CreateCompanyDto) {
    const company = await this.companyRepository.findOneCompanyByUserName(data.companyUserName)

    if (company) {
      return {status: 400, message: "Unavailable userName, please choose another"}
    }

    if (company && company.cnpj === data.cnpj) {
      return {status: 400, message: "Cnpj already exists"}
    }

    data.companyPassword = await bcrypt.hash(data.companyPassword, 10)
    
    await this.companyRepository.createCompany(data)
  }

  findAllCompanies() {
    return this.companyRepository.getAllCompanies()
  }

  async findOneByUserName(userName: string): Promise<{message:string, data?: CompanyEntity}> {
    const company = await this.companyRepository.findOneCompanyByUserName(userName)

    if (!company) {
      return { message: "User does not exists"}
    }

    delete company.companyPassword

    return {message: "User Found", data: company}
  }
}
