import { RecipeModel } from "../models/recipe.js";

// Get All Recipes

export const getRecipes = async (req, res, next) => {
    try {
        // Get Query Params
        const {limit, skip, search} = req.query;
        // Get all recipes from database 
        const allRecipes = await RecipeModel
        .find({name: search})
        .limit(limit) //you can limit it to 10 or any number=>.limit(limit || 10)
        .skip(skip);
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error); //the 'next' take up the errors caught by the catch and present it to the user as 500 or 404(this makes it user friendly)
    }
};

// Post Recipe
export const postRecipe = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
};

// Patch recipe
// export const patchRecipe = (req, res) => {
//     res.json(`Recipe with ID ${req.params.id} Updated`);
// }


export const patchRecipe = async(req, res, next) => {
    try {
        //Update recipe by id
        const  UpdatedRecipe = await RecipeModel.findByIdAndUpdate(req,params.id, req.body, {new: true});
        //Return response
        res.json(UpdatedRecipe);
    } catch (error) {
        next(error);
    }
};

//Delet Recipe
export const deleteRecipe = async(req, res, next) => {
    try {
// Delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(deletedRecipe);
    }
       catch (error) {
        next(error)
    }
};


// export const getRecipe = (req, res) => {
//     res.json(`Recipe with ID ${req.params.id} picked`);
// }
export const getRecipe = async(req, res, next) => {
    try {
   const getOneRecipe = await RecipeModel.findById();
   res.json(getOneRecipe);
    } catch (error) {
        next(error);
    }
};
