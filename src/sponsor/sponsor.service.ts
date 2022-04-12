import { Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import * as bcrypt from 'bcrypt'
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class SponsorService extends AccountService {
  // constructor(private readonly prisma: PrismaService) {}

  async create(createSponsorDto: CreateSponsorDto) {
    const data = {
      ...createSponsorDto,
      password: await bcrypt.hash(createSponsorDto.password, 10),
    };

    const createdSponsor = await this.prisma.accounts.create({data});

    return {
      ...createdSponsor,
      password: undefined,
    };
  }

  // findByEmail(email: string) {
  //   return this.prisma.accounts.findUnique({
  //     where: { email },
  //   });
  // }
}
