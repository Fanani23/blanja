import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Transaction = db.define('transaction', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    createdAt: {
        type: DataTypes.DATE,
        field: 'createdat'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedat'
    }
}, {
    freezeTableName: true
});

export default Transaction;

(async () => {
    await db.sync();
})();
