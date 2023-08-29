// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config();

const { PASSWORD, USERNAME, DB_NAME, DB_HOST, DB_PORT } = process.env;

module.exports = {
  development: {
    username: USERNAME,
    password: PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  },
  test: {
    username: USERNAME,
    password: PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  },
  production: {
    username: USERNAME,
    password: PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  },
};
