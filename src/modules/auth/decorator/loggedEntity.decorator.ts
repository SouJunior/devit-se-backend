import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const LoggedEntity = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const companyObject = request.user;

  if (!companyObject) {
    throw new UnauthorizedException(
      'User does not have permission to access this route',
    );
  }
  
  delete companyObject.companyPassword
  return companyObject;
});
