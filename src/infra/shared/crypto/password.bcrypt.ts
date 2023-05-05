import bcrypt from "bcrypt";
import { IPasswordCrypto } from "./password.crypto";

export class PasswordBcrypt implements IPasswordCrypto {
    async compare(password: string, passwordHash: string): Promise<boolean> {
        return bcrypt.compare(password, passwordHash);
    }
    hash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

}