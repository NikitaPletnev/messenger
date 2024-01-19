import Message from "../types/Message.js";
import FileService from "./FileService.js";

class MessagesService {
    async create(message, picture) {
        const fileName = FileService.saveFile(picture);
        return await Message.create({
            ...message, media: fileName
        });
    }

    async getByChannel(channelId) {
        return Message.find({
            channelId: channelId
        });
    }

    async edit(id, editedMessages) {
        if(!id || !editedMessages){
            throw new Error("ID Undefined!");
        }

        return Message.findByIdAndUpdate(id, editedMessages, {
            new: true
        });
    }

    async delete(id) {
        if(!id){
            throw new Error("ID Undefined!");
        }
        return Message.findOneAndDelete(id);
    }
}

export default new MessagesService();
