import express from "express";
import { getUserInfo } from "../services/user.service";
import * as Constraint from "../utils/constant";
const userRouter = express.Router();

userRouter.post("/info", async function (req, res) {
    let { email, userId, name } = req.body;
    if(email) {
        res.status(200).json(await getUserInfo(email, userId, name));
    } else {
        res.status(400).json("400: Bad request");
    }
});

export default userRouter;
