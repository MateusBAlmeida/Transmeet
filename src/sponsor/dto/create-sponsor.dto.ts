import { IsString, IsUrl } from "class-validator";
import { CreateAccountDto } from "src/account/dto/create-account.dto";

export class CreateSponsorDto extends CreateAccountDto {

    @IsString()
    address: string;

    @IsString()
    @IsUrl()
    site: string;

}
