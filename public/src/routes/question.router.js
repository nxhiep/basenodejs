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
const express_1 = __importDefault(require("express"));
const question_service_1 = require("../services/question.service");
const questionRouter = express_1.default.Router();
questionRouter.post("/adds", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let questions = req.body;
        if (questions && questions.length > 0) {
            res.status(200).json(yield (0, question_service_1.addQuestions)(questions));
        }
        else {
            res.status(400).json("400: Bad request");
        }
    });
});
questionRouter.post("/get-by-id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { id } = req.body;
        if (id) {
            res.status(200).json(yield (0, question_service_1.getQuestionById)(id));
        }
        else {
            res.status(400).json("400: Bad request");
        }
    });
});
questionRouter.post("/get-by-user-id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { userId } = req.body;
        if (userId) {
            res.status(200).json(yield (0, question_service_1.getQuestionsByUserId)(userId));
        }
        else {
            res.status(400).json("400: Bad request");
        }
    });
});
exports.default = questionRouter;
