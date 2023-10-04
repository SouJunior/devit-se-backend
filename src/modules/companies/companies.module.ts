import { Module } from '@nestjs/common';
import { CompanyService } from './services/company.service';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './repositories/company.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/database/entities/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyRepository, CompanyEntity])
  ],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyRepository]
})
export class CompanyModule {}
