export interface AccountPayload {
    sub: number;
    email: string;
    name: string;
    iat?: number;
    exp?: number;
}