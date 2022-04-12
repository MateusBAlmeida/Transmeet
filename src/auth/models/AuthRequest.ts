import { Request } from "express";
import { Account } from "src/account/entities/account.entity";

export interface AuthRequest extends Request {
    account: Account;
}