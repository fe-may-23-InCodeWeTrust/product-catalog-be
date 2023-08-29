/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './utils/db';
import { Product } from './models/Product';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(cors()).use(express.json());

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
})
  .catch(error => {
    console.error('Unable to connect to the database: ', error);
  });

sequelize.sync();

app.use(express.static('public'));

app.use('/products', async(req, res) => {
  const result = await Product.findAll();

  res.send(result);
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
