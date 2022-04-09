import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { SponsorModule } from './sponsor/sponsor.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    AuthModule, PrismaModule, UserModule, SponsorModule, AccountModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
  
})
export class AppModule { }
