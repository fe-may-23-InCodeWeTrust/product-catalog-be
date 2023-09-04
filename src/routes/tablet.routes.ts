import express from 'express';
import {
  getOneTabletById,
} from '../controllers/tablet.controller';

export const tabletRoutes = express.Router();

tabletRoutes.get('/:tabletId', getOneTabletById);
