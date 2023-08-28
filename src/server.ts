/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './utils/db';
import { Product } from './models';

dotenv.config();

const { CLIENT_URL, PORT } = process.env;

const app = express();

sequelize.authenticate();

app
  .use(cors({ origin: CLIENT_URL }))
  .use(express.json());

app.use('/products', async(req, res) => {
  const products = await Product.findAll();

  res.send(products);
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
