import UserModel from "../model/user.model"

export const getUserInfo = async (email: string, userId: string, name?: string) => {
    let user = await UserModel.findOne({ email: email });
    if(!user) {
        user = new UserModel({ 
            email,
            userId,
            name,
        });
        await user.save();
    } else {
        userId && (user.userId = userId);
        name && (user.name = name);
        await user.save();
    }
    return user;
}