import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, MinLength, MaxLength, Matches, IsBoolean, IsNumber } from "class-validator";
import { Account } from "../entities/account.entity";
import { StateDto } from "./state.dto";
import { TypeDto } from "./type.dto";

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
    states: StateDto;

    @ApiProperty()
    types: TypeDto;

}
