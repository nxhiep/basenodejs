"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = __importDefault(require("./src/routes/user.router"));
const question_router_1 = __importDefault(require("./src/routes/question.router"));
const mongodb_1 = __importDefault(require("./src/utils/mongodb"));
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var app = express();
app.use(cors({
    origin: "*",
}));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/auth", user_router_1.default);
app.use("/api/question", question_router_1.default);
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
(0, mongodb_1.default)();
var server = app.listen(process.env.PORT || 5000, function () {
    //start server
    let addressInfo = server.address();
    let port = typeof addressInfo === "string" ? addressInfo : (addressInfo ? addressInfo.port : "");
    console.log("Server listening on port " + port);
});
module.exports = app;
