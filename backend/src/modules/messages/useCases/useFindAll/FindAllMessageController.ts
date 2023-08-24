import { Request, Response } from "express";
import findAllMessageCase from "./FindAllMessageCase";

class FindAllMessageController {
    async handle(req: Request, res: Response) {
        const result = await findAllMessageCase.execute();
        return res.status(200).json(result);
    }
}

export default new FindAllMessageController;