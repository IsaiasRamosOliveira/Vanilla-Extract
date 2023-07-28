import { Router } from "express";
import { userRoutes } from "./user/user.routes";
import { messageRoutes } from "./message/message.routes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/messages", messageRoutes)
export { routes }