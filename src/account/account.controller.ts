import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('register')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  // @IsPublic()
  // @Post()
  // create(@Body() createAccountDto: CreateAccountDto){
  //   return this.accountService.create(createAccountDto);
  // }
}
