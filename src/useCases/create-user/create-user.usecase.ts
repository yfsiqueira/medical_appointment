import { User } from "../../entitites/user.entity"
import { ParameterRequiredError } from "../../errors/parameter-required.error"
import { UserRepository } from "../../repositories/user.repository"

type UserRequest = {
    name: string
    username: string
    password: string
}

export class CreateUserUseCase {
    async execute(data: UserRequest) {

        if (!data.username || !data.password) {
            throw new ParameterRequiredError('Username|Password is required.', 422);
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