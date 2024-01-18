import Channel from "../types/Channel.js";
import ChannelService from "../services/ChannelService.js";

class ChannelController {
    async create(req, res) {
        try {
            const newChannel = req.body;
            const channel = await ChannelService.create(newChannel, req.files.picture);
            return res.status(200).json({
                success: true,
                message: "Channel Created!",
                channel
            });
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: e.toString(),
            });
        }
    }

    async getAll(req, res) {
        try {
            const channels = await ChannelService.getAll();
            return res.status(200).json({
                success: true,
                channels
            });
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: e.toString(),
            });
        }
    }

    async edit(req, res) {
        try {
            const channel  = req.body;
            const updatedChannel = await ChannelService.edit(channel._id, channel);

            return res.status(200).json({
                success: true,
                updatedChannel
            });
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: e.toString(),
            });
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const channel = await ChannelService.delete(id);
            return res.status(200).json({
                success: true,
                channel
            });
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: e.toString(),
            });
        }
    }
}


export default new ChannelController();
