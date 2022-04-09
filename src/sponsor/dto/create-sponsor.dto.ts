import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl } from "class-validator";
import { CreateAccountDto } from "src/account/dto/create-account.dto";
import { Sponsor } from "../entities/sponsor.entity";

export class CreateSponsorDto extends CreateAccountDto {

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    @IsUrl()
    site: string;

}
