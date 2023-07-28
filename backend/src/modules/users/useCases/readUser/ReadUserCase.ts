import { User } from "@prisma/client";
import { IReadUserDTO } from "../../dtos/ReadUserDTO";
import { prisma } from "../../../../prisma/client";

class ReadUserCase{
    async execute({id}: IReadUserDTO): Promise<User>{
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user;
    }
}

export default new ReadUserCase;