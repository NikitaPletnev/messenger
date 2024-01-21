import Channel from "../types/Channel.js";
import FileService from "./FileService.js";

class ChannelService {
    async create(channel, picture) {
        const fileName = FileService.saveFile(picture);
        return await Channel.create({
            ...channel, avatar: fileName
        });
    }

    async getChannelsByUserId(id) {
        return Channel.find({
            "users": {
                "$regex": id, "$options": "i"
            }
        },);
    }

    async delete(id) {
        if(!id){
            throw new Error("ID Undefined!");
        }
        return Channel.findOneAndDelete(id);
    }
}

export default new ChannelService();
