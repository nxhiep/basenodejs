"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionsByUserId = exports.getQuestionById = exports.addQuestions = void 0;
const question_model_1 = __importDefault(require("../model/question.model"));
const addQuestions = (questions) => __awaiter(void 0, void 0, void 0, function* () {
    return yield question_model_1.default.insertMany(questions);
});
exports.addQuestions = addQuestions;
const getQuestionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield question_model_1.default.findById(id);
});
exports.getQuestionById = getQuestionById;
const getQuestionsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield question_model_1.default.find({ userId: userId });
});
exports.getQuestionsByUserId = getQuestionsByUserId;
