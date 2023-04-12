import { User } from "../../entitites/user.entity"
import { UserRepository } from "../../repositories/user.repository"

type UserRequest = {
    name: string
    username: string
    password: string
}

export class CreateUserUseCase {
    async execute(data: UserRequest) {

        if (!data.username || !data.password) {
            throw new Error('Username|Password is required.');
        }

        const userRepository = UserRepository.getInstance();
        const existUser = await userRepository.findByUsername(data.username);

        if (existUser) {
            throw new Error('Username alredy exists');
        }

        const user = User.create(data);

        const userCreated = await userRepository.save(user)
        return userCreated;
    }
}