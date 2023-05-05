import { Speciality } from "../../entities/speciality.entity";
import { ISpecialityRepository } from "../speciality.repository";
import { prismaClient } from "../../../../infra/databases/prisma.config";

export class SpecialityPrismaRepository implements ISpecialityRepository {
    findByName(name: string): Promise<Speciality | undefined> {
        throw new Error("Method not implemented.");
    }
    async save(data: Speciality): Promise<Speciality> {
        const newSpeciality = await prismaClient.speciality.create(
            {
                data: {
                    name: data.name,
                    description: data.description,
                    id: data.id
                }
            }
        );
        return newSpeciality;
    }

}