import { model, Schema, Types } from "mongoose";
import normalize from "normalize-mongoose";

const recipeSchema = new Schema({
    name: {type: String, unique: true, required: true}, //validation ; unique:true /required: true (means it won't take a number)
    categoryId: {type: Types.ObjectId, ref: 'Category', required: true},
    description: {type: String, required: true},
    ingredients: [{type: String}],
    image: {type: String, required: true},
    favourite:{type: Boolean, default: false}
}, {
    timestamps:true //help to keep records using createdAt/UpdatedAt
});

recipeSchema.plugin(normalize);

export const RecipeModel = model('Recipe', recipeSchema); // the 'model' allows one to .create, .find ,etc