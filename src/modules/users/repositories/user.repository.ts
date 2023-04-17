import { User } from "../entitites/user.entity"

export interface IUserRepository {
    findByUsername(username: string): Promise<User | undefined>
    save(data:User): Promise <User>
}