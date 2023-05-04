import { Request, Response } from "express";
import { ISpecialityRepository } from "../../repositories/speciality.repository";
import { CreateUserUseCase } from "../../../users/useCases/create-user/create-user.usecase";
import { createSpecialityUseCase } from "./create-speciality.usecase";

export class CreateSpecialityController {
    constructor(private specialityRepository: ISpecialityRepository) { }

    async handle(request: Request, response: Response) {
        try {
            const useCase = new createSpecialityUseCase(this.specialityRepository);

            const result = await useCase.execute(request.body);

            return response.json(result);
        } catch (error: any) {
            return response.status(error.statusCode || 400).json({
                error: error.message
            })
        }
    }
}