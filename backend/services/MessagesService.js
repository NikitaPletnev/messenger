import Message from "../types/Message.js";

class MessagesService {
    async create(message) {
        return await Message.create(message);
    }

    async getByChannel(channelId) {
        return Message.find({
            channelId: channelId
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
