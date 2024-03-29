/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import {
  getProductList,
  getNewProducts,
  getDiscountedProducts,
  getOneProduct,
} from '../controllers/product.controller';

export const productRoutes = express.Router();

productRoutes.get('/', getProductList);

productRoutes.get('/new', getNewProducts);

productRoutes.get('/discount', getDiscountedProducts);

productRoutes.get('/:id', getOneProduct);
