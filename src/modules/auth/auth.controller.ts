import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
// import { SwaggerLogged } from '../../shared/Swagger/decorators/auth/logged.swagger.decorator';

// import { SwaggerLogin } from '../../shared/Swagger/decorators/auth/login.swagger.decorator';
// import { MentorEntity } from '../mentors/entities/mentor.entity';
import { AuthService } from './auth.service';
import { LoggedEntity } from './decorator/loggedEntity.decorator';
import { CompanyLoginDto} from './dtos/company-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { CompanyEntity } from 'src/database/entities/company.entity';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  // @SwaggerLogin()
  async login(@Body() loginData: CompanyLoginDto, @Res() res: Response) {
    const { status, data } = await this.authService.execute(loginData);

    return res.status(status).send(data);
  }

  @Get('/user-logged')
  // @SwaggerLogged()
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  async userLogged(@LoggedEntity() company: CompanyEntity) {
    return company;
  }
}
