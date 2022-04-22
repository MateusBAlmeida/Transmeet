import { Injectable } from '@nestjs/common';
import { EMPTY } from 'rxjs';
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

    const verify = await this.prisma.match.findFirst({where: {idUser: data.idUser, idSponsor: data.idSponsor}});

    if(verify != null){
      return "Match already exist!"
    }

    const createMatch = await this.prisma.match.create({ data });

    return {
      ...createMatchDto
    };
  }

  findAllBySponsor(idSponsor: number) {

    return this.prisma.match.findMany({
        where: { idSponsor },
        include: {
          accounts_accountsTomatch_idUser: {
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
          }
        }
      });
  }

  findAllByUser(idUser: number) {
    return this.prisma.match.findMany({
      where: { idUser },
      include: {
        accounts_accountsTomatch_idSponsor: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.match.findFirst({
        where: { id },
        include: {
          accounts_accountsTomatch_idUser: {
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
              site: true,
              address: true,
              states: {
                select: {name: true}
              },
              types: {
                select: {name: true},
              }, 
            },
          },
          accounts_accountsTomatch_idSponsor: {
            select: {
              id: true,
              name: true
            }
          }
        }
      })
    }
  

  async update(id: number, response: boolean) {
      const updateMatch = await this.prisma.match.update({
        where: { id },
        data: {
          accept: response
        }
      })
      return updateMatch;

  }
}
