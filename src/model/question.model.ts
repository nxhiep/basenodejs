import mongoose from "mongoose";
import { model, Schema } from "mongoose";
import { userTable } from "./user.model";
mongoose.Promise = global.Promise;
const questionTable = "Question";

export interface Question {
    _id: any
    question: string
    createDate: number
    lastUpdate: number
    userId: string
    index: number
    options: Array<{
        _id: any
        text: string,
        type: string
    }>
}

const questionSchema = new Schema<Question>({
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
            ref: userTable
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
    },
    { versionKey: false }
);
const QuestionModel = model<Question>(questionTable, questionSchema);
export default QuestionModel;
