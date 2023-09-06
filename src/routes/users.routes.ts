import express from 'express';
import {
  createUser,
  getOneUserById,
  // updateFavorites,
  getFavorites,
} from '../controllers/user.controller';
// import { authenticateToken } from '../services/products.service';

export const usersRoutes = express.Router();

usersRoutes.post('/register', createUser);

usersRoutes.get('/login', getOneUserById);

usersRoutes.get('/:userId', getFavorites);

// usersRoutes.patch('/favorites', updateFavorites);
