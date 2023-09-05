/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable max-len */
import { Accessory } from '../models/Accessory';
import { Phone } from '../models/Phone';
import type { Request, Response, NextFunction } from 'express';
import { Tablet } from '../models/Tablet';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const getOnePhone = async (id: string) => {
  return Phone.findByPk(id);
};

export const getOneTablet = async (id: string) => {
  return Tablet.findByPk(id);
};

export const getOneAccessory = async (id: string) => {
  return Accessory.findByPk(id);
};

export const generateAccessToken = (email: string) => {
  const privateKey = process.env.PRIVATE_KEY as string;

  return jwt.sign(email, privateKey);
};

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    res.sendStatus(400);

    return;
  }

  jwt.verify(
    token,
    process.env.PRIVATE_KEY as string,
    (err: any, user: any) => {
      console.log(err);

      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;

      next();
    },
  );
};
