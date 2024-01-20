import User from "../types/User.js";
import FileService from "./FileService.js";

class UserService {
    async create(user, picture) {
        const fileName = FileService.saveFile(picture);
        const ifUserExist = await User.find({
            username: user.username
        });
        if(ifUserExist.length === 0){
            return await User.create({
                ...user, avatar: fileName
            });
        }else{
            throw new Error("User Already Exist!");
        }
    }

    async checkUser(user) {
        return User.find({
            username: user.username, password: user.password
        });
    }

    async getAll() {
        return User.find();
    }
}

export default new UserService();
