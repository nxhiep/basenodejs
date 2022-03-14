"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTable = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
mongoose_1.default.Promise = global.Promise;
exports.userTable = "User";
const userSchema = new mongoose_2.Schema({
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
}, { versionKey: false });
const UserModel = (0, mongoose_2.model)(exports.userTable, userSchema);
exports.default = UserModel;
