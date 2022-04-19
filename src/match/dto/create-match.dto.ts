import { IsNumber } from "class-validator";
import { Match } from "../entities/match.entity";

export class CreateMatchDto extends Match {

    @IsNumber()
    idUser: number;

    @IsNumber()
    idSponsor: number;
    
}
