import Router from "express";
import UserController from "../controllers/userController.js";


const userRouter = new Router();

userRouter.post("/user", UserController.create);
userRouter.post("/checkUser", UserController.checkUser);
userRouter.get("/getAll", UserController.getAll);


export default userRouter;
