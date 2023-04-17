import { User } from "../../entitites/user.entity";
import { IUserRepository } from "../user.repository";

export class UserPrimaReposity implements IUserRepository{
    findByUsername(username: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    save(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
}