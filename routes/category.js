import { Router } from "express";
import { getCategories, postCategory } from "../controller/category.js";

//Create a router
const categoryRouter = Router();

//Define Routes 
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', postCategory);
//Export Router
export default categoryRouter;