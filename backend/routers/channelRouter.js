import Router from "express";
import ChannelController from "../controllers/ChannelController.js";


const channelRouter = new Router();

channelRouter.post("/channel", ChannelController.create);
channelRouter.put("/channel", ChannelController.edit);
channelRouter.delete("/channel/:id", ChannelController.delete);

channelRouter.get("/channels", ChannelController.getAll);


export default channelRouter;
