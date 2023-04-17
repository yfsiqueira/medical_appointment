import { UserPrimaReposity } from "../../repositories/implementations/user.prisma.repository";
import { CreateUserController } from "./create-user.controller";

const userPrismaRepository = new UserPrimaReposity();
const createUserController = new CreateUserController(userPrismaRepository);

export { createUserController };
