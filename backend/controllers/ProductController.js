import Product from "../models/ProductModel.js";
import { Op } from "sequelize";

export const getProduct = async (req, res) => {
  try {
    const { sortBy, limit, search } = req.query;

    let newResponse = [];
    newResponse = await Product.findAll();

    // limit
    if (typeof limit !== "undefined") {
      newResponse = await Product.findAll({
        limit: limit,
      });
    }

    // search
    if (typeof search !== "undefined") {
      newResponse = await Product.findAll({
        where: {
          product_name: {
            [Op.iRegexp]: `${search}$`,
          },
        },
      });
    }

    // sortBy
    if (typeof sortBy !== "undefined") {
      if (newResponse.length !== 0) {
        if (sortBy == "price") {
          newResponse = newResponse.sort((a, b) => {
            return b.price - a.price;
          });
        }
      }
    }
    res.status(200).json(newResponse);
  } catch (err) {
    console.log(err.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.status(201).json({ msg: "Product created" });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product updated" });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product deleted" });
  } catch (err) {
    console.log(err.message);
  }
};
