import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { UserPrimaReposity } from "../../repositories/implementations/user.prisma.repository";
import { CreateUserController } from "./create-user.controller";

const userPrismaRepository = new UserPrimaReposity();
const passwordBcrypt = new PasswordBcrypt();
const createUserController = new CreateUserController(
    userPrismaRepository,
    passwordBcrypt
);

export { createUserController };
