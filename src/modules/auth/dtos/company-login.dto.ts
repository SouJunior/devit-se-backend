import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
// import { LoginTypeEnum } from '../enums/login-type.enum';

export class CompanyLoginDto {
  @IsNotEmpty({ message: "The 'userName' field must not be empty" })
  @IsString({ message: 'Only strings are allowed in this field' })
  @ApiProperty({
    required: true,
    description: 'UserName do usuário.',
    example: 'FulanoDeTal123',
  })
  userName: string;

  @IsString({ message: 'Only strings are allowed in this field' })
  @IsNotEmpty({ message: "The 'password' field must not be empty" })
  @ApiProperty({
    required: true,
    description: 'Senha de Login',
    example: 'Abcd@123',
  })
  password: string;

  // @IsEnum(LoginTypeEnum, { message: 'This field only accepts: "mentor" or "user"' })
  // @IsNotEmpty()
  // type: LoginTypeEnum;
}
