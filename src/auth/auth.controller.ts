import {
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
  import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
  import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
  
  
  @Controller()
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @ApiTags('login')
    @IsPublic()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Request() req: AuthRequest) {
        console.log(req.account);
        
        return this.authService.login(req.account);
    }
  }