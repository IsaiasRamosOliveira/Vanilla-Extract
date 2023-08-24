import { Message } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

class FindAllMessageCase {
    async execute(): Promise<Message[]> {
        const messages = await prisma.message.findMany();
        return messages;
    }
}
export default new FindAllMessageCase;