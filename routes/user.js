import { Router } from "express";
import { register } from "../controller/user.js";

// Create Router
const userRouter = Router();

// Define Router
userRouter.post('/register', register);

// Export Router
export default userRouter