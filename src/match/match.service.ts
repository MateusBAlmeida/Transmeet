import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {

  constructor(private readonly prisma: PrismaService, private readonly accountService: AccountService) { }

  async create(createMatchDto: CreateMatchDto) {
    const data = {
      ...createMatchDto
    };

    const createMatch = await this.prisma.match.create({ data });

    return {
      ...createMatchDto
    };
  }

  findAllBySponsor(idSponsor: number) {

    return this.prisma.match.findMany({
        where: { idSponsor },
      });
  }

  findAllByUser(idUser: number) {
    return this.prisma.match.findMany({
      where: { idUser },
    });
  }

  findOne(id: number, idSponsor: number) {
    return {
      result: this.prisma.match.findUnique({
        where: { id }
      }),
      account: this.accountService.findById(idSponsor)
    };
  }

  async update(id: number, response: boolean) {
    if (response) {
      const updateMatch = await this.prisma.match.update({
        where: { id },
        data: {
          accept: true
        }
      })
      return updateMatch;
    }
    else {
      const updateMatch = await this.prisma.match.update({
        where: { id },
        data: {
          accept: false
        }
      })
      return updateMatch;
    }

  }
}
