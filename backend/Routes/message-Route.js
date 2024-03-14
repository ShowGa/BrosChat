import express from "express";
import { getMessage, sendMessage } from "../Controller/message-controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// this is is user_id from receiver
router.get("/:id", protectRoute, getMessage);
// this id is user_id from receiver
router.post("/send/:id", protectRoute, sendMessage);

export default router;
