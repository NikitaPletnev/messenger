import MessagesService from "../services/MessagesService.js";

class MessagesController {
    async create(req, res) {
        try {
            const newMessages = req.body;
            const Messages = await MessagesService.create(newMessages, req?.files?.picture);
            return res.status(200).json({
                success: true,
                message: "Messages Created!",
                Messages
            });
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: e.toString(),
            });
        }
    }

    async getByChannel(req, res) {
        const {id} = req.params;
        try {
            const messages = await MessagesService.getByChannel(id);
            return res.status(200).json({
                success: true,
                messages
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
            const Messages  = req.body;
            const updatedMessages = await MessagesService.edit(Messages._id, Messages);

            return res.status(200).json({
                success: true,
                updatedMessages
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
            const Messages = await MessagesService.delete(id);
            return res.status(200).json({
                success: true,
                Messages
            });
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: e.toString(),
            });
        }
    }
}


export default new MessagesController();
