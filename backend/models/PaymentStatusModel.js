import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const PaymentStatus = db.define("payment_status", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  payment_name: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    field: "createdat",
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: "updatedat",
  },
});

export default PaymentStatus;
