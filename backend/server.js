// eslint-disable
import express from "express";
import mongoose from "mongoose";
import channelRouter from "./routers/channelRouter.js";
import userRouter from "./routers/userRouter.js";
import messageRouter from "./routers/messageRouter.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const PORT = 5002;
const DB_URL = "mongodb+srv://user_1:user_1@cluster0.mrqfdi0.mongodb.net/?retryWrites=true&w=majority";

let corsOptions = {
    origin : ['http://localhost:3000'],
}

const app = express();

app.use(express.json());
app.use(express.static("assets"));
app.use(fileUpload({}));
app.use(cors(corsOptions));
app.use("/messenger_api", channelRouter)
app.use("/messenger_api", userRouter)
app.use("/messenger_api", messageRouter)

async function startApp(){
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    }catch (e) {
        console.log(e);
    }
}

startApp();


