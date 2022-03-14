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
const processData = () => __awaiter(void 0, void 0, void 0, function* () {
    //   let appInfos = await readFileAppInfos();
    //   let web = appInfos.filter((w) => w.gaIds);
    //   let app = appInfos;
    //   //   console.log("web ", web);
    //   //   console.log("app ", app);
    //   let all = {
    //     web,
    //     app,
    //   };
    //   console.log(all);
    console.log("processData");
});
processData();
