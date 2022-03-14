import QuestionModel, { Question } from "../model/question.model"
import UserModel from "../model/user.model"

export const addQuestions = async (questions: Array<Question>) => {
    return await QuestionModel.insertMany(questions);
}

export const getQuestionById = async (id: string) => {
    return await QuestionModel.findById(id);
}

export const getQuestionsByUserId = async (userId: string) => {
    return await QuestionModel.find({ userId: userId });
}