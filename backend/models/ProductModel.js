import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      field: "createdat",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updatedat",
    },
  },
  {
    freezeTableName: true,
  }
);

export default Product;

(async () => {
  await db.sync();
})();
