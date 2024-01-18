// eslint-disable
import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5002;
const DB_URL = "mongodb+srv://user_1:user_1@cluster0.mrqfdi0.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.static("assets"));
app.use(fileUpload({}));
app.use("/messenger_api", router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    }catch (e) {
        console.log(e);
    }
}

startApp();


