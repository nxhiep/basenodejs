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
exports.getSetting = exports.updateSetting = exports.addSetting = void 0;
const mongodb_1 = require("mongodb");
const setting_model_1 = __importDefault(require("../model/setting.model"));
const addSetting = (setting) => __awaiter(void 0, void 0, void 0, function* () {
    let _setting = new setting_model_1.default(setting);
    yield _setting.save();
    return _setting;
});
exports.addSetting = addSetting;
const updateSetting = (setting) => __awaiter(void 0, void 0, void 0, function* () {
    yield setting_model_1.default.updateOne({ _id: new mongodb_1.ObjectId(setting._id) }, setting);
    return setting;
});
exports.updateSetting = updateSetting;
const getSetting = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield setting_model_1.default.findOne({ userId: userId });
});
exports.getSetting = getSetting;
