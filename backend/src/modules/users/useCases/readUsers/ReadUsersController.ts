import { Request, Response } from "express"
import readUsersCase from "./ReadUsersCase";
class ReadUsersController {
    async handle(req: Request, res: Response) {
        const result = await readUsersCase.execute();
        return res.status(201).json(result);
    }
}

export default new ReadUsersController;