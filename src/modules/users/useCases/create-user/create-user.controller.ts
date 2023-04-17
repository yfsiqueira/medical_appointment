import { ErrorRequestHandler, Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";
import { logger } from "../../../../utils/logger";
import { IUserRepository } from "../../repositories/user.repository";


export class CreateUserController {

    constructor(private userRepository: IUserRepository){};

    async handle(request: Request, response: Response) {

        logger.info('Usuário sendo criado');

        try {
            const useCase = new CreateUserUseCase(this.userRepository);

            const data = request.body
            const result = await useCase.execute(data);

            return response.json(result)
        } catch (error: any) {
            logger.error(error.stack);
            return response.status(error.statusCode).json(error.message)
        }
    }
}