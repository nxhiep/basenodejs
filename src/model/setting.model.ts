import mongoose from "mongoose";
import { model, Schema } from "mongoose";
import { userTable } from "./user.model";
mongoose.Promise = global.Promise;
const settingTable = "Setting";

export interface Setting {
    _id: any
    language: string
    sound: boolean
    colorSchemes: Array<string>
    createDate: number
    lastUpdate: number
    userId: string
}

const settingSchema = new Schema<Setting>({
        language: {
            type: String,
            required: true,
        },
        sound: {
            type: Boolean
        },
        createDate: {
            type: Number
        },
        lastUpdate: {
            type: Number
        },
        userId: {
            type: String,
            ref: userTable
        },
        colorSchemes: {
            type: Array<String>
        }
    },
    { versionKey: false }
);
const SettingModel = model<Setting>(settingTable, settingSchema);
export default SettingModel;
