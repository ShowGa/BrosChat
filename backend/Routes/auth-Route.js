import express from "express";
import { logIn, logOut, signUp } from "../Controller/auth-Controller.js";

const router = express.Router();

router.post("/login", logIn);

router.get("/logout", logOut);

router.post("/signup", signUp);

export default router;
