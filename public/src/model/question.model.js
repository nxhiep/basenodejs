"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const user_model_1 = require("./user.model");
mongoose_1.default.Promise = global.Promise;
const questionTable = "Question";
const questionSchema = new mongoose_2.Schema({
    question: {
        type: String,
        required: true,
    },
    createDate: {
        type: Number
    },
    lastUpdate: {
        type: Number
    },
    index: {
        type: Number,
        default: -1,
    },
    userId: {
        type: String,
        ref: user_model_1.userTable
    },
    options: [
        {
            text: {
                type: String
            },
            type: {
                type: String
            }
        }
    ],
}, { versionKey: false });
const QuestionModel = (0, mongoose_2.model)(questionTable, questionSchema);
exports.default = QuestionModel;
