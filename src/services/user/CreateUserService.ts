import prismaClient from '../../prisma/index';
import { hash } from 'bcryptjs';

type CreateUser = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
    active: boolean
}

class CreateUserService {


    async execute({ firstName, lastName, email, password, role, active }: CreateUser) {

        if(!email) {
            throw new Error("Insira um email válido!");
        }

        const validEmail = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(validEmail) {
            throw new Error("Email já cadastrado!");
        }

        const passwordCrypt = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: passwordCrypt,
                role: role,
                active: active
            },
        })

        return user

    }

}

export { CreateUserService }