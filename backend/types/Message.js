import mongoose from "mongoose";


const Message = mongoose.Schema({
    channelId: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    dateTime: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    media: {
        type: String
    }
});

export default mongoose.model("Message", Message);


