import { User } from "@prisma/client";
import { Response, Request } from "express";
import updateUserCase from "./UpdateUserCase";
class UpdateUserController {
    async handle(req: Request, res: Response): Promise<any> {
        const { id, name, email, password } = req.body;
        const result = await updateUserCase.execute({ id, name, email, password })
        return res.status(201).json(result);
    }
}

export default new UpdateUserController;