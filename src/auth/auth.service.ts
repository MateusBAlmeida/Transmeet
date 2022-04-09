import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { User as Account } from 'src/user/entities/user.entity';
import { AccountPayload } from './models/AccountPayload';
import { JwtService } from '@nestjs/jwt';
import { AccountToken } from './models/AccountToken';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class AuthService {

    constructor (private readonly accountService: AccountService, private readonly jwtService : JwtService){}

    login(account: Account): AccountToken {
        const payload: AccountPayload = {
            sub: account.id,
            email: account.email,
            name: account.name,
        };

        const jwtToken = this.jwtService.sign(payload)

        return {
            access_token: jwtToken,
        };
    }
    
    
    async validateAccount(email: string, password: string) {
        const user = await this.accountService.findByEmail(email);

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid){
                return {
                    ...user,
                    password: undefined,
                };
            }

        }

        throw new Error('email or password is incorrect')

    }

}
