/* eslint-disable max-len */
/* eslint-disable no-console */
import { Sequelize } from 'sequelize-typescript';
import { models } from '../models/index';
import dotenv from 'dotenv';

dotenv.config();

const { USERNAME, PASSWORD, DB_HOST, DB_NAME } = process.env;

const URI: string = `postgres://${USERNAME}:${PASSWORD}@${DB_HOST}/${DB_NAME}`;

export const sequelize = new Sequelize(URI, {
  models: Object.values(models),
  logging: false,
  dialectOptions: {
    ssl: true,
  },
});
