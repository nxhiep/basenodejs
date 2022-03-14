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
const setting_service_1 = require("../services/setting.service");
const questionRouter = express_1.default.Router();
questionRouter.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { setting } = req.body;
        if (setting) {
            res.status(200).json(yield (0, setting_service_1.addSetting)(setting));
        }
        else {
            res.status(400).json("400: Bad request");
        }
    });
});
questionRouter.post("/update", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { setting } = req.body;
        if (setting) {
            res.status(200).json(yield (0, setting_service_1.updateSetting)(setting));
        }
        else {
            res.status(400).json("400: Bad request");
        }
    });
});
questionRouter.post("/get-setting", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { userId } = req.body;
        if (userId) {
            res.status(200).json(yield (0, setting_service_1.getSetting)(userId));
        }
        else {
            res.status(400).json("400: Bad request");
        }
    });
});
exports.default = questionRouter;
