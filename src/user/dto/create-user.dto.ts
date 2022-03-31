import { User } from '../entities/user.entity';
import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
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
    cpf: string;

    @IsString()
    birthday_date: string;

    @IsString()
    address: string;

    @IsString()
    gender: string;

    
}