import { Speciality } from "../../entities/speciality.entity"
import { ISpecialityRepository } from "../../repositories/speciality.repository";

type SpecialityRequest = {
    name: string
    description: string

}

export class createSpecialityUseCase {

    constructor(private specialityRepository: ISpecialityRepository) { }

    async execute(data: SpecialityRequest) {
        const specility = Speciality.create(data);

        const specialityCreated = await this.specialityRepository.save(specility);

        return specialityCreated;
    }
}