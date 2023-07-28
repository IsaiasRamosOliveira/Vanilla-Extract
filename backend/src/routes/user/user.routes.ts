import { Router } from "express";
import createUserController from "../../modules/users/useCases/CreateUserController";

const userRoutes = Router();
userRoutes.post("/", createUserController.handle);
export { userRoutes }