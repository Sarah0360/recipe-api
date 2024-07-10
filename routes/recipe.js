import { Router } from "express";
import { getRecipes, postRecipe, patchRecipe, deleteRecipe, getRecipe } from "../controller/recipe.js";
import { remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";


//Create a Router
const recipesRouter = Router();

//Define Router
recipesRouter.get('/recipes', getRecipes);

recipesRouter.post('/recipes', checkUserSession, remoteUpload.single('image'), postRecipe);

recipesRouter.patch('/recipes/:id', checkUserSession, patchRecipe);

recipesRouter.delete('/recipes/:id', checkUserSession, deleteRecipe);

recipesRouter.get('/recipes/:id', getRecipe);


//Export Router
export default recipesRouter;
