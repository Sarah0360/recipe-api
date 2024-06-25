import { Router } from "express";

//Create a Router
const recipesRouter = Router();

//Define Router
recipesRouter.get('/recipes', (req, res) => {
    res.json('All Recipes')
});

recipesRouter.post('/recipes', (req, res) => {
    res.json('Recipe Added')
});

recipesRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} Updated`);
});

recipesRouter.delete('/recipes/:id', (req, res) =>{
    res.json(`Recipe with ID ${req.params.id} deleted`)
});


//Export Router
export default recipesRouter;
