import { ObjectId } from "mongodb";
import SettingModel, { Setting } from "../model/setting.model";

export const addSetting = async (setting: Setting) => {
    let _setting = new SettingModel(setting);
    await _setting.save();
    return _setting;
}

export const updateSetting = async (setting: Setting) => {
    await SettingModel.updateOne({ _id: new ObjectId(setting._id) }, setting);
    return setting;
}

export const getSetting = async (userId: string) => {
    return await SettingModel.findOne({ userId: userId });
}