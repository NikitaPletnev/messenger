import UserService from "../services/UserService.js";

class UserController {
    async create(req, res) {
        try {
            const newUser = req.body;
            const user = await UserService.create(newUser, req?.files?.picture);
            return res.status(200).json({
                success: true,
                message: "User Created!",
                user
            });
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: e.toString(),
            });
        }
    }

    async checkUser(req, res) {
        const userFrom = req.body;
        try {
            const users = await UserService.checkUser(userFrom);
            if(users.length){
                return res.status(200).json({
                    success: true,
                    users
                });
            }else{
                return res.status(500).json({
                    success: false,
                    message: "User not found! Check Username and Password ans try again. Or sign up!"
                });
            }
        }catch (e) {
            return res.status(500).json({
                success: false,
                message: e.toString(),
            });
        }
    }
}


export default new UserController();
