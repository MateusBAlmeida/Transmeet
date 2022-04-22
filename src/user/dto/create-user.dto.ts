import {
    IsString,
} from 'class-validator';
import { CreateAccountDto } from 'src/account/dto/create-account.dto';

export class CreateUserDto extends CreateAccountDto {

    @IsString()
    birthDate: string;

    @IsString()
    gender: string;

    @IsString()
    address: string;


}