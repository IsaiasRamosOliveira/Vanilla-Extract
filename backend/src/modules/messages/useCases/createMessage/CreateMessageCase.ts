import { Message } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { ICreateMessageDTO } from "../../dtos/CreateMessageDTO";
class CreateUserCase {
    async execute({ to, from, description, id_user }: ICreateMessageDTO): Promise<Message> {
        const message = await prisma.message.create({
            data: {
                from,
                to,
                description,
                id_user,
            }
        })

        return message
    }
}

export default new CreateUserCase