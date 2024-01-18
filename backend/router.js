import Router from "express";
import ChannelController from "./controllers/ChannelController.js";


const router = new Router();

router.post("/channel", ChannelController.create);
router.put("/channel", ChannelController.edit);
router.delete("/channel/:id", ChannelController.delete);

router.get("/channels", ChannelController.getAll);


export default router;
