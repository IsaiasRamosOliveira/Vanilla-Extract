import { Router } from "express";
import createMessageController from "../../modules/messages/useCases/useCreate/CreateMessageController";
import findAllMessageController from "../../modules/messages/useCases/useFindAll/FindAllMessageController";
const messageRoutes = Router();
messageRoutes
    .post("/", createMessageController.handle)
    .get("/", findAllMessageController.handle)

export { messageRoutes };
