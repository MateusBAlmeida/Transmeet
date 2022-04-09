import { Request } from "express";
import { User } from "src/user/entities/user.entity";

export interface AuthRequest extends Request {
    account: User;
}