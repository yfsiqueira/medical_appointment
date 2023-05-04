import {randomUUID} from "crypto"

type ISpeciality = {
    name: string
    description: string
}

export class Speciality {

    id: string
    name: string
    description: string

    private constructor({ name, description }: ISpeciality) {
        this.id = randomUUID();
        this.name = name;
        this.description = description;
    }

    static create(props: ISpeciality){

        if(!props.name){
            throw new Error('Speciality is required');
        }

        const specility = new Speciality(props);
        return specility;
    }
}