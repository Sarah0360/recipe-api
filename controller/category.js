import { CategoryModel } from "../models/category.js";

export const getCategories  = async(req, res, next) => {
    try {
        // Get All Categories From database
        const allCategories = await CategoryModel.find();
        //Return response
        res.status (200).json(allCategories);
    } catch (error) {
        next(error);
    }
}

export const postCategory = async(req, res, next) => {
    try {
        //Add Category to database
        const newCategory = await CategoryModel.create(req.body);
        //Return response
        res.status(200).json(newCategory); 
    } catch (error) {
        next(error);
    }
}