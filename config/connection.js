const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  const dbName = 'your_database_name'; // Replace with your actual database name
  const dbUser = 'root'; // Replace with your actual database username
  const dbPassword = 'DGcity23!'; // Replace with your actual database password

  sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
