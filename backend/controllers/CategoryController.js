import Category from "../models/CategoryModel.js";
import { Op } from "sequelize";

export const getCategory = async (req, res) => {
  try {
    const { sortBy, limit, search, page, sort } = req.query;
    const offset = limit * (page - 1);

    let newResponse = [];
    newResponse = await Category.findAll();

    // limit
    if (typeof limit !== "undefined") {
      newResponse = await Category.findAll({
        limit: limit,
      });
    }

    // page
    if (typeof page !== "undefined") {
      newResponse = await Category.findAll({
        limit: limit,
        offset: offset,
      });
    }

    // search
    if (typeof search !== "undefined") {
      newResponse = await Category.findAll({
        where: {
          category_name: {
            [Op.iRegexp]: `${search}`,
          },
        },
      });
    }

    // sortBy
    if (typeof sortBy !== "undefined") {
      if (sortBy == "name") {
        if (sort == "desc") {
          newResponse = newResponse.sort((a, b) => {
            return b.category_name - a.category_name;
          });
        } else if (sort == "asc") {
          newResponse = newResponse.sort((a, b) => {
            return a.category_name - b.category_name;
          });
        }
      }
    }

    res.status(200).json(newResponse);
  } catch (err) {
    console.log(err.message);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const response = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const createCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.status(201).json({ msg: "Category created" });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateCategory = async (req, res) => {
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Category updated" });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Category deleted" });
  } catch (err) {
    console.log(err.message);
  }
};
