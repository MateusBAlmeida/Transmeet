import {
    IsDate,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAccountDto } from 'src/account/dto/create-account.dto';
import { Timestamp } from 'bson';

export class CreateUserDto extends CreateAccountDto {

    @ApiProperty()
    @IsString()
    birthDate: string;

    @ApiProperty()
    @IsString()
    gender: string;

    @ApiProperty()
    @IsString()
    address: string;


}