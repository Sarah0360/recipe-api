import { Router } from "express";
import { login, logout, profile, register } from "../controller/user.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create Router
const userRouter = Router();

// Define Router
userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.post('/logout', checkUserSession, logout);
// checkUser Session Aids to see if you are Logged in to acces a profile
userRouter.get('/profile', checkUserSession, profile);


// Export Router
export default userRouter;