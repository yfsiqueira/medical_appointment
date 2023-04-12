import { ErrorRequestHandler, Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";

export class CreateUserController {
    async handle(request: Request, response: Response) {


        try {
            const useCase = new CreateUserUseCase();

            const data = request.body
            const result = await useCase.execute(data);

            return response.json(result)
        } catch (error: any) {
            return response.status(400).json(error.message)
        }
    }
}