import express from 'express';
import {
  getOneProductById,
} from '../controllers/phone.controller';

export const phoneRoutes = express.Router();

phoneRoutes.get('/:phoneId', getOneProductById);
