import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxDate,
  MaxLength,
  Min,
  MinDate,
} from 'class-validator';
import { JobsContractTypeEnum } from '../enums/contractType.enum';
import { JobFormatEnum } from '../enums/jobFormat.enum';
import { JobLevelEnum } from '../enums/jobLevel.enum';
import { PublicityChannelEnum } from '../enums/publicityChannel.enum';

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @ApiProperty({
    required: true,
    description: 'Título do trabalho',
    example: 'Desenvolvedor',
  })
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(3000)
  @ApiProperty({
    required: true,
    description: 'Descrição do trabalho',
    example: 'Trabalho com vendas',
  })
  jobDescription: string;

  @IsEnum(JobLevelEnum)
  @ApiProperty({
    required: false,
    description: 'Senioridade da vaga',
    enum: [
      JobLevelEnum.junior,
      JobLevelEnum.midlevel,
      JobLevelEnum.senior,
      JobLevelEnum.other,
    ],
    example: JobLevelEnum.junior,
  })
  jobLevel: string;

  @IsEnum(PublicityChannelEnum)
  @ApiProperty({
    required: false,
    description: 'Canal de divulgação',
    enum: [
      PublicityChannelEnum.devit,
      PublicityChannelEnum.linkedin,
      PublicityChannelEnum.indeed,
      PublicityChannelEnum.google,
      PublicityChannelEnum.others,
    ],
    example: PublicityChannelEnum.devit,
  })
  publicityChannel: string;

  @IsBoolean()
  @ApiProperty({
    required: true,
    description: "Status da vaga",
    example: "Vaga inativa/ativa"
  })
  jobStatus: boolean

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(3000)
  @ApiProperty({
    required: true,
    description: 'Descrição dos hard-skills requeridos pela vaga',
    example: 'Conhecimento em python 3',
  })
  softRequirements?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(3000)
  @ApiProperty({
    required: true,
    description: 'Descrição dos soft-skills requeridos pela vaga',
    example: 'Familiaridade com Scrum',
  })
  hardRequirements?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty({
    required: true,
    description: "Nome da empresa que oferece esta vaga",
    example: "Empresa tal"
  })
  companyName: string

  @IsOptional()
  @IsString()
  @MaxLength(3000)
  @ApiProperty({
    required: false,
    description: 'Beneficios da vaga',
    example: 'Vale alimentação, Auxilio homeofice',
  })
  benefits?: string;

  @IsOptional()
  @IsEnum(JobsContractTypeEnum)
  @ApiProperty({
    required: false,
    description: 'Tipo de contrato do trabalho',
    example: JobsContractTypeEnum.clt,
    enum: [
      JobsContractTypeEnum.clt,
      JobsContractTypeEnum.pj,
      JobsContractTypeEnum.others,
    ],
  })
  contractType?: string;

  @IsNumber()
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 0, allowNaN: false, allowInfinity: false })
  @Max(99999)
  @Min(0)
  @ApiProperty({
    required: false,
    description: 'Valor da remuneração em meses',
    example: 3000,
  })
  salary?: string;

  @IsNotEmpty()
  @IsEnum(JobFormatEnum)
  @ApiProperty({
    required: true,
    description: 'Modalidade do trabalho',
    example: JobFormatEnum.homeOffice,
    enum: [
      JobFormatEnum.homeOffice,
      JobFormatEnum.onSite,
      JobFormatEnum.hybrid,
    ],
  })
  jobFormat: string;

  @IsOptional()
  @Exclude()
  @IsString()
  company_id?: string;

  @ApiProperty({
    required: true,
    description: 'Data da divulgação da vaga',
    example: "data tal",
  })
  publicationDate: string

  @IsOptional()
  @ApiProperty({
    required: true,
    description: 'Data do encerramento da vaga',
    example: "data tal",
  })
  finishDate?: string
}
