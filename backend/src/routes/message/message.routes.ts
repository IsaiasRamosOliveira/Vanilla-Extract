import { Router } from "express";
import createMessageController from "../../modules/messages/useCases/CreateMessageController";
const messageRoutes = Router();
messageRoutes.post("/", createMessageController.handle)
export { messageRoutes }