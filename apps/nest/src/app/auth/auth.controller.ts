import { Controller, Get } from '@nestjs/common';
import { ResponseDto } from '../../shared/common-response.dto';

@Controller('auth')
export class AuthController {
  @Get()
  test(): ResponseDto<null> {
    return { statusCode: 200, message: 'Hello World' };
  }
}
