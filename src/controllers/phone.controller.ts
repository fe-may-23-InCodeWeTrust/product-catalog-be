/* eslint-disable no-shadow */
import { Op } from 'sequelize';
import { Product } from '../models/Product';
import { getOnePhone } from '../services/products.service';
import type { Request, Response } from 'express';

export const getOneProductById = async(
  req: Request,
  res: Response,
) : Promise<void> => {
  const { phoneId } = req.params;

  const foundProduct = await getOnePhone(phoneId);

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
