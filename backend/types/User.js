import mongoose from "mongoose";


const User = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    role:  {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    }
});

export default mongoose.model("User", User);


