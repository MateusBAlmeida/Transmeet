import { Match } from "../entities/match.entity";

export class CreateMatchDto extends Match {

    idUser: number;

    idSponsor: number;
    
}
