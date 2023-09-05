import express from 'express';
import {
  createUser,
  getOneUserById,
  updateFavorites,
} from '../controllers/user.controller';
import { authenticateToken } from '../services/products.service';

export const usersRoutes = express.Router();

usersRoutes.post('/register', createUser);

usersRoutes.get('/login', authenticateToken, getOneUserById);

usersRoutes.patch('/favorites', authenticateToken, updateFavorites);
