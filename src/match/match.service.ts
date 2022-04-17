import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {

  constructor (private readonly prisma: PrismaService){}

  async create(createMatchDto: CreateMatchDto) {
    const data = {
      ...createMatchDto
    };

    const createMatch = await this.prisma.match.create({data});

    return {
      ...createMatchDto
    };
  }

  findAllBySponsor(idSponsor: number) {
    return this.prisma.match.findMany({
      where: {idSponsor},
    });
  }

  findAllByUser(idUser: number) {
    return this.prisma.match.findMany({
      where: { idUser },
    });
  }

  findOne(id: number) {
    return this.prisma.match.findUnique({
      where:{id}
    });
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }
}
