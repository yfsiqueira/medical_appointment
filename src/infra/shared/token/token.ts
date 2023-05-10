import { User } from "../../../modules/users/entitites/user.entity";


export interface IToken {
    create(user: User): string
    validate(token: string): boolean
}