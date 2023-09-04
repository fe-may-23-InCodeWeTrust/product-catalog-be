import express from 'express';
import { getOneAccessoryById } from '../controllers/accessory.controller';

export const accessoryRoutes = express.Router();

accessoryRoutes.get('/:accessoryId', getOneAccessoryById);
