import mongoose from "mongoose";
import { model, Schema } from "mongoose";
mongoose.Promise = global.Promise;
export const userTable = "User";

export interface User {
    _id: any
    userId: string
    email: string 
    name: string
    avatar: string
    createDate: number
    lastUpdate: number
}

const userSchema = new Schema<User>(
    {
        userId: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        avatar: {
            type: String
        },
        name: {
            type: String,
            required: false,
        },
        createDate: {
            type: Number
        },
        lastUpdate: {
            type: Number
        },
    },
    { versionKey: false }
);
const UserModel = model<User>(userTable, userSchema);
export default UserModel;