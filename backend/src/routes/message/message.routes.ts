import { Router } from "express";
import createMessageController from "../../modules/messages/useCases/createMessage/CreateMessageController";
const messageRoutes = Router();
messageRoutes.post("/", createMessageController.handle)
export { messageRoutes };
