import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./authenticate-user.usecase";
import { IUserRepository } from "../../repositories/user.repository";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

export class AuthenticateUserController {

    constructor(private userRepository: IUserRepository, private passwordCrypto: IPasswordCrypto) { }
    async handle(request: Request, response: Response) {
        try {
            const data = request.body;

            const authenticateUserUseCase = new AuthenticateUserUseCase(this.userRepository, this.passwordCrypto);
            
            const result = await authenticateUserUseCase.execute(data);

            return response.json(result)

        } catch (error: any) {
            return response.status(error.statusCode).json({
                error: error.message
            })
        }
    }
}