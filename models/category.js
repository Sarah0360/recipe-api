import {model, Schema } from "mongoose";
import normalize from "normalize-mongoose";

const categorySchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
});

categorySchema.plugin(normalize);

export const CategoryModel = model('Category', categorySchema);