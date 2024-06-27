import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    name: {type: String, unique: true, required: true}, //validation ; unique:true /required: true (means it won't take a number)
    ingredients: [{type: String}]
});

export const RecipeModel = model('Recipe', recipeSchema);