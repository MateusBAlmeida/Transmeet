import { Module } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { SponsorController } from './sponsor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SponsorController],
  providers: [SponsorService],
  exports: [SponsorService]
})
export class SponsorModule {}
