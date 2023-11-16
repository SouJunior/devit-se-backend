import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { SectorEnum } from '../enums/sector.enum';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @ApiProperty({
    description: 'Nome da empresa',
    example: 'Pipomills',
  })
  companyName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    description: 'Nome de usuário da empresa',
    example: 'Pipomills123',
  })
  companyUserName: string

  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha de login da empresa',
    example: 'Pipo@123',
  })
  companyPassword: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(14)
  @MinLength(14)
  @ApiProperty({
    description: 'CNPJ',
    example: '67979311000115',
  })
  cnpj: string;

  @IsOptional()
  @IsEnum(SectorEnum)
  @ApiProperty({
    required: false,
    description: 'Setor da empresa',
    enum: [
      SectorEnum.infoTecnology,
      SectorEnum.health,
      SectorEnum.financial,
      SectorEnum.automobIndustry,
      SectorEnum.logistics,
      SectorEnum.retail,
      SectorEnum.others
    ],
    example: SectorEnum.infoTecnology
  })
  sector?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Endereço da empresa',
    example: 'Rua tal, número tal',
  })
  address: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Complemento do endereço',
    example: 'Tipo de casa tal, número da casa tal',
  })
  complement?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do bairro onde a empresa está localizada',
    example: 'Bairro tal',
  })
  district?: string;
}
