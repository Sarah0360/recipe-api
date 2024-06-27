import { Router } from "express";
import { getRecipes, postRecipe, patchRecipe, deleteRecipe, getRecipe } from "../controller/recipe.js";


//Create a Router
const recipesRouter = Router();

//Define Router
recipesRouter.get('/recipes', getRecipes);

recipesRouter.post('/recipes', postRecipe);

recipesRouter.patch('/recipes/:id', patchRecipe);

recipesRouter.delete('/recipes/:id', deleteRecipe);

recipesRouter.get('/recipes/:id', getRecipe);


//Export Router
export default recipesRouter;