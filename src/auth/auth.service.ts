import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { AccountPayload } from './models/AccountPayload';
import { JwtService } from '@nestjs/jwt';
import { AccountToken } from './models/AccountToken';
import { AccountService } from 'src/account/account.service';
import { Account } from 'src/account/entities/account.entity';

@Injectable()
export class AuthService {

    constructor (private readonly accountService: AccountService, private readonly jwtService : JwtService){}

    async login(account: Account)/*: Promise<AccountToken>*/ {

        if(account == undefined){

        return console.log(account)
        }
        const payload: AccountPayload = {
            sub: account.id,
            email: account.email,
            name: account.name,
        };


        const jwtToken = this.jwtService.sign(payload)

        return {
            access_token: jwtToken,
            account: await this.accountService.findByEmail(payload.email),
        };
    }
    
    
    async validateAccount(email: string, password: string): Promise<Account> {
        const account = await this.accountService.findByEmail(email);

        if (account) {
            const isPasswordValid = await bcrypt.compare(password, account.password);

            if (isPasswordValid){
                return {
                    ...account,
                    password: undefined,
                };
            }

        }

        throw new Error('email or password is incorrect')

    }

}
