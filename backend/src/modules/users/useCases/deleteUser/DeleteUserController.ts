import { Request, Response } from "express"
import deleteUserCase from "./DeleteUserCase";
class DeleteUSerController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const result = await deleteUserCase.execute({ id });
        return res.status(201).json({
            message: "User deleted."
        })
    }
}

export default new DeleteUSerController;