/* eslint-disable no-shadow */
import { Op } from 'sequelize';
import { Product } from '../models/Product';
import { getOneTablet } from '../services/products.service';
import type { Request, Response } from 'express';

export const getOneTabletById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { tabletId } = req.params;

  const foundProduct = await getOneTablet(tabletId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  const recommended = await Product.findAll({
    where: {
      itemId: {
        [Op.startsWith]: foundProduct.namespaceId,
      },
    },
    limit: 12,
  });

  res.send({ foundProduct, recommended });
};
