import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AccountModule } from 'src/account/account.module';
import { UserModule } from 'src/user/user.module';


@Module({
    imports: [
        UserModule,
        AccountModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '30d' },
        }),
    ],
    controllers: [
        AuthController, AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {
   
}