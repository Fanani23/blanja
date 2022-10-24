export const checkCreateCategory = (req, res, next) => {
  const { category_name } = req.body;
  try {
    if (category_name === "") {
      throw new Error("Category name can't be empty!");
    }
  } catch (err) {
    return res.send(`${err}`);
  }
  next();
};

export const checkUpdateCategory = (req, res, next) => {
  const { category_name } = req.body;
  try {
    if (category_name === category_name) {
      throw new Error(
        "New category name can't be same with the old category name!"
      );
    }
  } catch (err) {
    return res.send(`${err}`);
  }
  next();
};
