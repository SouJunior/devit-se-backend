import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jtw/jwt.strategy';
import { CompanyModule } from '../companies/company.module';
import { CompanyRepository } from '../companies/repositories/company.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/database/entities/company.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, CompanyRepository],
  exports: [AuthService]
})

export class AuthModule {}
