import express from "express";

// sub router
import userRouter from "@routes/userRouter";
import authRouter from "@routes/authRouter";

const router = express.Router();

// attach sub router to main router
router.use("/auth", authRouter);
router.use("/user", userRouter);

router.get("/", (_req, res) => res.end("API Home Page"));

export default router;
