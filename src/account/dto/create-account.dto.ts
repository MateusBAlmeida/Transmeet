import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, MinLength, MaxLength, Matches, IsNumber, IsUrl } from "class-validator";
import { Account } from "../entities/account.entity";

export class CreateAccountDto extends Account {

    @ApiProperty()
    @IsString()
    name: string;
    
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    })
    password: string;

    @ApiProperty()
    @IsString()
    telephone: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    regNumber: string;

    @ApiProperty()
    @IsString()
    description: string;
    
    @ApiProperty()
    @IsNumber()
    stateId: number;

    @ApiProperty()
    @IsNumber()
    typeId: number;

    @ApiProperty()
    birthDate: string;

    @IsString()
    address: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    site: string;


}
