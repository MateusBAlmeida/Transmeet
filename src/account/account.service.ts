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

  async findAllSponsors(){ 
    return this.prisma.accounts.findMany({
      where:{typeId: 2},
      select: {
        id: true,
        name: true,
        email: true,
        telephone: true,
        regNumber: true,
        description: true,
        city: true,
        address: true,
        site: true,
        states: {
          select: {name: true}
        },
        types: {
          select: {name: true}
        }
      }
    });
  }

  async findById(id: number){
    const account = await this.prisma.accounts.findUnique({where:{id}});
    return {
      ...account,
      password: undefined
    }
  }

  findSponsorsByName(name: string){
    return this.prisma.accounts.findMany({
      where: {
        name: {
          contains: name, mode: 'insensitive'
        },
        typeId: 2
      },
      select: {
        id: true,
        name: true,
        email: true,
        telephone: true,
        regNumber: true,
        description: true,
        city: true,
        address: true,
        site: true,
        states: {
          select: {name: true}
        },
        types: {
          select: {name: true}
        }
      }
    });
  }

  findUsersByName(name: string){
    return this.prisma.accounts.findMany({
      where: {
        name: {
          contains: name, mode: 'insensitive'
        },
        typeId: 1
      },
      select: {
        id: true,
        name: true,
        email: true,
        telephone: true,
        regNumber: true,
        description: true,
        city: true,
        birthDate: true,
        gender: true,
        address: true,
        states: {
          select: {name: true}
        },
        types: {
          select: {name: true}
        }
      }
    });
  }

  findAllUsers(){
    return this.prisma.accounts.findMany({
      where:{typeId: 1},
      select: {
        id: true,
        name: true,
        email: true,
        telephone: true,
        regNumber: true,
        description: true,
        city: true,
        birthDate: true,
        gender: true,
        address: true,
        states: {
          select: {name: true}
        },
        types: {
          select: {name: true}
        }
      }
    });
  }

  findByEmail(email: string) {
    return this.prisma.accounts.findUnique({
      where: {email},
    });
  }
}
