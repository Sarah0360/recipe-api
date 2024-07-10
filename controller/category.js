import { CategoryModel } from "../models/category.js";

export const getCategories  = async(req, res, next) => {
    try {
        // Get Query Params
        const {limit= 10, skip= 0, filter="{}", sort="{}", fields="{}"} = req.query;
        // Get All Categories From database
        const allCategories = await CategoryModel
        .find(JSON.parse(filter))
        .select(JSON.parse(fields))
        .limit(JSON.parse(limit)) //you can limit it to 10 or any number=>.limit(limit || 10)
        .skip(JSON.parse(skip))
        .sort(JSON.parse(sort))
        //Return response
        res.status (200).json(allCategories);
    } catch (error) {   
        next(error);
    }
}

export const postCategory = async(req, res, next) => {
    try {
        // console.log(req.body);
        // console.log(req.file);
        //Add Category to database
    const newCategory = await CategoryModel.create({
        ...req.body,
        image: req.file.filename}
    );
        //Return response
        res.status(200).json(newCategory); 
    } catch (error) {
        next(error);
    }
}