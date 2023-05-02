import { ErrorRequestHandler, Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";
import { logger } from "../../../../utils/logger";
import { IUserRepository } from "../../repositories/user.repository";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";


export class CreateUserController {

    constructor(private userRepository: IUserRepository, private passwordCrypto : IPasswordCrypto) { };

    async handle(request: Request, response: Response) {

        logger.info('Usuário sendo criado');

        try {
            const useCase = new CreateUserUseCase(this.userRepository, this.passwordCrypto);

            const data = request.body
            const result = await useCase.execute(data);

            return response.json(result)
        } catch (error: any) {
            logger.error(error.stack);
            return response.status(error.statusCode).json({
                error: error.message
            })
        }
    }
}