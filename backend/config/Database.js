import {Sequelize} from "sequelize";

var config = {
    'define': {
        'createdAt': 'createdat',
        'updatedAt': 'updatedat'
    }
}

const db = new Sequelize({
    username: 'postgres',
    host: 'localhost',
    database: 'db_blanja',
    password: '1',
    dialect: 'postgres',
    config,
    port: 5432 
});

export default db;