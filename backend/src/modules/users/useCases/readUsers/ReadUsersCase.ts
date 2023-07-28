import { User } from "@prisma/client";
import { IReadUserDTO } from "../../dtos/ReadUserDTO";
import { prisma } from "../../../../prisma/client";

class ReadUsersCase{
    async execute(): Promise<User[]>{
        const user = await prisma.user.findMany()
        return user;
    }
}

export default new ReadUsersCase;