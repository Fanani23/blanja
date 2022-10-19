import Category from "../models/CategoryModel.js";

export const getCategory = async (req, res) => {
    try {
        const response = await Category.findAll();
        res.status(200).json(response);
    } catch (err) {
        console.log(err.message);
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const response = await Category.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (err) {
        console.log(err.message);
    }
};

export const createCategory = async (req, res) => {
    try {
        await Category.create(req.body);
        res.status(201).json({msg: 'Category created'});
    } catch (err) {
        console.log(err.message);
    }
};

export const updateCategory = async (req, res) => {
    try {
        await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: 'Category updated'});
    } catch (err) {
        console.log(err.message);
    }
};

export const deleteCategory = async (req, res) => {
    try {
        await Category.destroy(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: 'Category deleted'});
    } catch (err) {
        console.log(err.message);
    }
};