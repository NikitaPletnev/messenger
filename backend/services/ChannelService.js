import Channel from "../types/Channel.js";
import FileService from "./FileService.js";

class ChannelService {
    async create(channel, picture) {
        const fileName = FileService.saveFile(picture);
        return await Channel.create({
            ...channel, avatar: fileName
        });
    }

    async getAll() {
        return Channel.find();
    }

    async edit(id, editedChannel) {
        if(!id || !editedChannel){
            throw new Error("ID Undefined!");
        }

        return Channel.findByIdAndUpdate(id, editedChannel, {
            new: true
        });
    }

    async delete(id) {
        if(!id){
            throw new Error("ID Undefined!");
        }
        return Channel.findOneAndDelete(id);
    }
}

export default new ChannelService();
