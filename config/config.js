// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config();

const { PASSWORD, USERNAME, DB_NAME, DB_HOST } = process.env;
const URI = `postgres://${USERNAME}:${PASSWORD}@${DB_HOST}/${DB_NAME}`;

const settings = {
  url: URI,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};
