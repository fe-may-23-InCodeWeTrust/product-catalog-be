/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { Request, Response } from 'express';
import type { ProductType } from '../types';
import { Product } from '../models/Product';

const productTypeOptions = ['phones', 'tablets', 'accessories'];

export const getProductList = async(
  req: Request,
  res: Response,
): Promise<void> => {
  const {
    offset = '0',
    limit = '16',
    productType,
  } = req.query;

  if (typeof offset !== 'string'
  || typeof limit !== 'string'
  || typeof productType !== 'string'
  ) {
    res.sendStatus(422);

    return;
  }

  if (productType !== undefined && !productTypeOptions.includes(productType)) {
    res.status(400).send('Invalid product type option');

    return;
  }

  const products = await Product.findAll({
    offset: +offset,
    limit: +limit,
    where: {
      category: productType,
    },
  });

  res.send(products);
};

export const getNewProducts = async(
  req: Request,
  res: Response,
): Promise<void> => {
  const products = await Product.findAll();
  const newProducts = products
    .sort((a: ProductType, b: ProductType) => b.year - a.year)
    .slice(0, 12);

  res.send(newProducts);
};

export const getDiscountedProducts = async(
  req: Request,
  res: Response,
): Promise<void> => {
  const products = await Product.findAll();
  const discountedPhones = products
    .sort(
      (a: ProductType, b: ProductType) =>
        b.fullPrice - b.price - (a.fullPrice - a.price),
    )
    .slice(0, 12);

  res.send(discountedPhones);
};
