import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Transaction = db.define(
  "transaction",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: DataTypes.STRING,
    product_name: DataTypes.STRING,
    ammount: DataTypes.INTEGER,
    grand_total: DataTypes.INTEGER,
    payment_name: DataTypes.STRING,
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

export default Transaction;

(async () => {
  await db.sync();
})();
