/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './utils/db';
import { Phone } from './models/Phone';
import { Tablet } from './models/Tablet';
import { Accessory } from './models/Accessory';
import { productRoutes } from './routes/product.routes';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(cors()).use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

sequelize.sync();

app.use(express.static('public'));

app.use('/products', productRoutes);

app.use('/phones', async(req, res) => {
  const result = await Phone.findAll();

  res.send(result);
});

app.use('/tablets', async(req, res) => {
  const result = await Tablet.findAll();

  res.send(result);
});

app.use('/accessories', async(req, res) => {
  const result = await Accessory.findAll();

  res.send(result);
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
