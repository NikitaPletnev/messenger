import Router from "express";
import ChannelController from "../controllers/ChannelController.js";


const channelRouter = new Router();

channelRouter.post("/channel", ChannelController.create);
channelRouter.delete("/channel/:id", ChannelController.delete);

channelRouter.post("/channels", ChannelController.getChannelsByUserId);


export default channelRouter;
