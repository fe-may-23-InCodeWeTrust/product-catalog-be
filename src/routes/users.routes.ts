import express from 'express';
import {
  createUser,
  getOneUserById,
  updateFavorites,
  getFavorites,
  getUserData,
} from '../controllers/user.controller';
// import { authenticateToken } from '../services/products.service';

export const usersRoutes = express.Router();

usersRoutes.post('/register', createUser);

usersRoutes.get('/login', getOneUserById);

usersRoutes.get('/', getFavorites);

usersRoutes.get('/:userId', getUserData);

usersRoutes.patch('/favorites', updateFavorites);
