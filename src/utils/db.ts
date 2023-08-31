/* eslint-disable max-len */
/* eslint-disable no-console */
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { models } from '../models';

dotenv.config();

const { USERNAME, PASSWORD, DB_HOST, DB_NAME } = process.env;

const URI: string = `postgres://${USERNAME}:${PASSWORD}@${DB_HOST}/${DB_NAME}`;

export const sequelize = new Sequelize(URI, {
  models,
  logging: false,
  dialectOptions: {
    ssl: true,
  },
});
