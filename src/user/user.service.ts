import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'
import { AccountService } from 'src/account/account.service';

@Injectable()
export class UserService extends AccountService {

  // constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      name: createUserDto.name.trim(),
      email: createUserDto.email.trim(),
      description: createUserDto.description.trim(),
      city: createUserDto.city.trim(),
      address:createUserDto.address.trim(),
      password: await bcrypt.hash(createUserDto.password, 10)
    };

    const createdUser = await this.prisma.accounts.create({data});

    return {
      ...createdUser,
      password: undefined,
    };
  }

  // findByEmail(email: string) {
  //   return this.prisma.accounts.findUnique({
  //     where: { email },
  //   });
  // }
}
