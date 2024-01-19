import Router from "express";
import MessagesController from "../controllers/MessagesController.js";


const messageRouter = new Router();

messageRouter.post("/messages", MessagesController.create);
messageRouter.put("/messages/:id", MessagesController.edit);
messageRouter.delete("/messages/:id", MessagesController.delete);

messageRouter.get("/messagesByChannel/:id", MessagesController.getByChannel);


export default messageRouter;
