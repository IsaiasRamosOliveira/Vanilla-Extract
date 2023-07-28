import { Request, Response } from "express"
import readUserCase from "./ReadUserCase";
class ReadUserController {
    async handle(req: Request, res: Response) {
        const {id} = req.params
        const result = await readUserCase.execute({id});
        return res.status(201).json(result);
    }
}

export default new ReadUserController;