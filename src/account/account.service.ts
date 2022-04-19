import { Injectable } from '@nestjs/common';
import { prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(readonly prisma: PrismaService) {}

  // async create(createAccountDto: CreateAccountDto){
  //   const data = {
  //     ...createAccountDto,
  //     password: await bcrypt.hash(createAccountDto.password, 10)
  //   };

  //   const createAccount = await this.prisma.accounts.create({data});

  //   return {
  //     ...createAccount,
  //     password: undefined,
  //   }
  // }

  findAllSponsors(){
    return this.prisma.accounts.findMany({where:{typeId: 2}});
  }

  findById(id: number){
    return this.prisma.accounts.findUnique({where:{id}});
  }

  findSponsorsByName(name: string){
    return this.prisma.accounts.findMany({where:{name: {contains: name, mode: 'insensitive'},typeId: 2}});
  }

  findUsersByName(name: string){
    return this.prisma.accounts.findMany({where:{name: {contains: name, mode: 'insensitive'},typeId: 1}});
  }

  findAllUsers(){
    return this.prisma.accounts.findMany({where:{typeId: 1}});
  }

  findByEmail(email: string) {
    return this.prisma.accounts.findUnique({
      where: {email},
    });
  }
}
