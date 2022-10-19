import {DataTypes} from "sequelize";
import db from "../config/Database.js";

const Category = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        field: 'createdat'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedat'
    }
});

export default Category;

(async () => {
    await db.sync();
})();