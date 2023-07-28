import createMessageCase from "./CreateMessageCase"
import { Request, Response } from "express"
class CreateMessageController {
    async handle(req: Request, res: Response) {
        const { to, from, description, id_user } = req.body
        const result = await createMessageCase.execute({ to, from, description, id_user })
        return res.status(201).json(result);
    }
}
export default new CreateMessageController