import { User } from "@prisma/client";
import { IUpdateUserDTO } from "../../dtos/UpdateUserDTO";
import { prisma } from "../../../../prisma/client";

class UpdateUserCase {
    async execute({id, ...data}: IUpdateUserDTO): Promise<User>{
        const {email} = await prisma.user.findFirst({
            where: {
                id
            }
        })
        const user = await prisma.user.update({
            where: {
                email
            },
            data
        })
        return user;
    }
}

export default new UpdateUserCase;