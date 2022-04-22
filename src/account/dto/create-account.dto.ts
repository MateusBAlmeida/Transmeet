import { IsString, IsEmail, MinLength, MaxLength, Matches, IsNumber, IsUrl } from "class-validator";
import { Account } from "../entities/account.entity";

export class CreateAccountDto extends Account {

    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    })
    password: string;

    @IsString()
    telephone: string;

    @IsString()
    city: string;

    @IsString()
    regNumber: string;

    @IsString()
    description: string;
    
    @IsNumber()
    stateId: number;

    @IsNumber()
    typeId: number;

    birthDate: string;

    @IsString()
    address: string;

    gender: string;

    site: string;


}
