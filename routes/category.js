import { Router } from "express";
import { getCategories, postCategory } from "../controller/category.js";
import { remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";


//Create a router
const categoryRouter = Router();

//Define Routes 
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories',checkUserSession, remoteUpload.single('image'), postCategory);
//Export Router
export default categoryRouter;