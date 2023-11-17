import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CompanyRepository } from 'src/modules/companies/repositories/company.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly companyRepository: CompanyRepository,
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { userName: string }) {
    const company = await this.companyRepository.findOneCompanyByUserName(payload.userName);

    if (!company) {
      throw new UnauthorizedException('Company not found or not authorized!');
    }
    
    if (company) {
    delete company.companyPassword;
    return company;
    }
  }
}
