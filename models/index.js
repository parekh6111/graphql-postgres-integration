import Sequelize from 'sequelize';

const sequelize = new Sequelize('test-db', 'postgres', 'argusadmin', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {
    User: sequelize.import('./user'),
    Post: sequelize.import('./post')
}

// Object.keys(db).forEach((modelName) => {
//     if ('associate' in db[modelName]) {
//         db[modelName].associate(db);
//     }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;