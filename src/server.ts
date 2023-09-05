/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './utils/db';
import { productRoutes } from './routes/product.routes';
import { phoneRoutes } from './routes/phone.routes';
import { tabletRoutes } from './routes/tablet.routes';
import { accessoryRoutes } from './routes/accessory.routes';
import { usersRoutes } from './routes/users.routes';

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

app.use('/phones', phoneRoutes);

app.use('/tablets', tabletRoutes);

app.use('/accessories', accessoryRoutes);

app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
