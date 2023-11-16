import {Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CompanyRepository } from '../companies/repositories/company.repository';
import { CompanyLoginDto } from './dtos/company-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private companyRepository: CompanyRepository,
    private jwt: JwtService,
  ) {}

  async execute({ userName, password}: CompanyLoginDto) {
    const company = await this.companyRepository.findOneCompanyByUserName(userName);

    if (!company) {
      return { status: 404, data: "The credentials passed are incorrect"}
    }
    
    const passwordIsValid = await bcrypt.compare(password, company.companyPassword);

    if (!passwordIsValid) {
      return { status: 400, data: "The credentials passed are incorrect"}
    }

    return {
      status: 200,
      message: "Logged successfully",
      data: {
        token: this.jwt.sign({ userName }),
        company,
      },
    };
  }
}
