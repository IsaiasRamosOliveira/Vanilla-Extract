import { Router } from "express";
import createUserController from "../../modules/users/useCases/createUser/CreateUserController";
import readUserController from "../../modules/users/useCases/readUser/ReadUserController";
import readUsersController from "../../modules/users/useCases/readUsers/ReadUsersController";
import updateUserController from "../../modules/users/useCases/updateUser/UpdateUserController";
import deleteUserController from "../../modules/users/useCases/deleteUser/DeleteUserController";

const userRoutes = Router();
userRoutes.get("/", readUsersController.handle)
userRoutes.get("/:id", readUserController.handle)
userRoutes.put("/:id", updateUserController.handle)
userRoutes.post("/", createUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle)
export { userRoutes }