import { Controller, Post, Body } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@ApiTags('sponsor')
@Controller('sponsor')
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}

  @IsPublic()
  @Post()
  create(@Body() createSponsorDto: CreateSponsorDto) {
    return this.sponsorService.create(createSponsorDto);
  }

}
