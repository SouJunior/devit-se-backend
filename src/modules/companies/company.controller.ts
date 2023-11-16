import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './services/company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Company")
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() data: CreateCompanyDto) {
    return this.companyService.createCompany(data);
  }

  @Get()
  findAll() {
    return this.companyService.findAllCompanies();
  }

    @Get(":userName")
    async findOneCompany(@Param("userName") userName: string) {
      return this.companyService.findOneByUserName(userName);
  }
}
