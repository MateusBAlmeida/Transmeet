import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @Get('users/:id')
  findAllByUser(@Param('id') id: number) {
    return this.matchService.findAllByUser(+id);
  }

  @Get('sponsors/:id')
  findAllBySponsor(@Param('id') id: number) {
    return this.matchService.findAllBySponsor(+id);
  }

  @Get(':id')
  showMatch(@Param('id') id: number) {
    return this.matchService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number,@Body('response') response: boolean){
    return this.matchService.update(id, response);
  }

}
