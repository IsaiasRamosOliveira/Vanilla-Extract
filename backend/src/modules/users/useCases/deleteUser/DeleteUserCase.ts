import { prisma } from "../../../../prisma/client";
import { IDeleteUser } from "../../dtos/DeleteUserDTO";

class DeleteUserCase {
    async execute({ id }: IDeleteUser): Promise<void> {
        const user = await prisma.user.deleteMany({
            where: {
                id
            }
        })
    }
}

export default new DeleteUserCase;