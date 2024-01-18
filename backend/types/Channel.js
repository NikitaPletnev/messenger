import mongoose from "mongoose";


const Channel = mongoose.Schema({
    creator: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    users:  {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    }
});

export default mongoose.model("Channel", Channel);


