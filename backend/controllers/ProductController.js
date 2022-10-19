import Product from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.status(200).json(response);
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
