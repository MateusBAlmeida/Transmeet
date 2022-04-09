import { State } from "../entities/state.entity";

export class StateDto extends State {
    id?: number;
    name: string;
}