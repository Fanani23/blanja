export const checkCreateProduct = (req, res, next) => {
  const { product_name, stock, category_name, price } = req.body;
  try {
    if (product_name === "") {
      throw new Error("Product name can't be empty!");
    } else if (stock === 0) {
      throw new Error("Product stock must be more than zero!");
    } else if (category_name === "") {
      throw new Error("Category name can't be empty!");
    } else if (price === 0) {
      throw new Error("Product price can't be empty!");
    }
  } catch (err) {
    return res.status(404).send(`${err}`);
  }
  next();
};

export const checkUpdateProduct = (req, res, next) => {
  const { product_name, stock, category_name, price } = req.body;
  try {
    if (product_name === "") {
      throw new Error("New product name can't be empty!");
    } else if (stock === 0) {
      throw new Error("New product stock must be more than zero!");
    } else if (category_name === "") {
      throw new Error("New category name can't be empty!");
    } else if (price === 0) {
      throw new Error("New product price can't be empty!");
    }
  } catch (err) {
    return res.status(404).send(`${err}`);
  }
  next();
};
