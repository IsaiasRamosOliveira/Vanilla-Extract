import { User } from "@prisma/client"
import { prisma } from "../../../../prisma/client";
import { ICreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";
class CreateUserCase {
    async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userAlreadyExists) {
            throw new AppError("User already exists!", 400);
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return user
    }
}

export default new CreateUserCase