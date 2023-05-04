import { PrismaClient } from "@prisma/client";
// import { prismaClient } from "../../../../infra/databases/prisma.config";
import { Speciality } from "../../entities/speciality.entity";
import { ISpecialityRepository } from "../speciality.repository";
import { prismaClient } from "../../../../infra/databases/prisma.config";

export class SpecialityPrismaRepository implements ISpecialityRepository {
    findByName(name: string): Promise<Speciality | undefined> {
        throw new Error("Method not implemented.");
    }
    async save(data: Speciality): Promise<Speciality> {
        console.log({
            description: data.description,
            name: data.description,
            id: data.id
        })

        // const prismaClient = new PrismaClient();
        const newSpeciality = await prismaClient.speciality.create(
            {
                data: {
                    name: data.description,
                    description: data.description,
                    id: data.id
                }
            }
        );

        console.log({ newSpeciality })
        return newSpeciality;
    }

}