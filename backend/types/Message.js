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
    authorName: {
        type: String,
        required: true,
    },
    dateTime: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    edited: {
        type: Boolean,
        required: true,
    }
});

export default mongoose.model("Message", Message);


