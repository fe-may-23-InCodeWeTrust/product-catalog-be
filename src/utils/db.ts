/* eslint-disable max-len */
/* eslint-disable no-console */
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.USERNAME || '';
const PASSWORD = process.env.PASSWORD || '';
const DB_NAME = process.env.DB_NAME || '';
const DB_HOST = process.env.DB_HOST || '';

const URI: string = `postgres://${USERNAME}:${PASSWORD}@${DB_HOST}/${DB_NAME}`;

export const sequelize = new Sequelize(URI, {
  models: [Product],
  logging: false,
  dialectOptions: {
    ssl: true,
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
