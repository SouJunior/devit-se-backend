import { Module } from '@nestjs/common';
import { JobsModule } from './modules/jobs/jobs.module';
import { CompanyModule } from './modules/companies/companies.module';
import { JobsDraftsModule } from './modules/jobs-drafts/jobs-drafts.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './database/data-source';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...typeormConfig,
        autoLoadEntities: true
      })
    }),
    JobsModule, CompanyModule, JobsDraftsModule],
})
export class AppModule {}
