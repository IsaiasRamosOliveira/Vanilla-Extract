import createUserCase from "./CreateUserCase"
import { Request, Response } from "express"
class CreateUserController {
    async handle(req: Request, res: Response) {
        const {name, email, password} = req.body
        const result = await createUserCase.execute({name, email, password})
        return res.status(201).json(result);
    }
}
export default new CreateUserController