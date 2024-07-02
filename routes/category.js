import { Router } from "express";
import { getCategories, postCategory } from "../controller/category.js";
import { localUpload } from "../middlewares/upload.js";


//Create a router
const categoryRouter = Router();

//Define Routes 
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', localUpload.single('image'), postCategory);
//Export Router
export default categoryRouter;