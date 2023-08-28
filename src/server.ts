/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './utils/db';

dotenv.config();

const { CLIENT_URL, PORT } = process.env;

const app = express();
const start = sequelize.authenticate();

console.log(start);

app
  .use(cors({ origin: CLIENT_URL }))
  .use(express.json())
  .use('/', (req, res) => {
    res.send('product catalog server');
  });

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
