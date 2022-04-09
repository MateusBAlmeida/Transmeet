import { Account } from "src/account/entities/account.entity";

export class User extends Account {
    birthDate: string;
    gender: string;
    address: string;
}
