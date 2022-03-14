"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const user_model_1 = require("./user.model");
mongoose_1.default.Promise = global.Promise;
const settingTable = "Setting";
const settingSchema = new mongoose_2.Schema({
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
        ref: user_model_1.userTable
    },
    colorSchemes: [String]
}, { versionKey: false });
const SettingModel = (0, mongoose_2.model)(settingTable, settingSchema);
exports.default = SettingModel;
