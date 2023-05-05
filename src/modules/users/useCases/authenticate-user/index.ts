import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { UserPrimaReposity } from "../../repositories/implementations/user.prisma.repository";
import { AuthenticateUserController } from "./authenticate-user.controller";

const userRepository = new UserPrimaReposity();
const passwordCrypto = new PasswordBcrypt();

const authenticateUserController = new AuthenticateUserController(userRepository, passwordCrypto);


export {authenticateUserController};