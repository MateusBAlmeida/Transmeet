import { State } from "./state.entity";
import { Type } from "./type.entity";

export class Account {
    id: number;
    name: string;
    email: string;
    telephone: string;
    password: string;
    regNumber: string;
    description: string;
    city: string;
    states: State;
    types: Type;
}
