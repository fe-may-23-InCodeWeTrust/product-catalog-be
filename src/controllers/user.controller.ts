/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { User } from '../models/User';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { generateAccessToken } from '../services/products.service';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

export const getOneUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const authHeader = req.headers['authorization'];

  const email = authHeader?.split(':')[0];
  const password = authHeader?.split(':')[1];

  if (!email || !password) {
    res.sendStatus(400);

    return;
  }

  const foundUser = await User.findOne({
    where: {
      email,
    },
  });

  if (!foundUser) {
    res.status(400);

    return;
  }

  const { password: hashedPassword } = foundUser;
  const isMatch = await bcrypt.compare(password, hashedPassword);

  if (!isMatch) {
    res.send({ err: 'Wrong password. Please try one more time' });

    return;
  }

  const resEmail = foundUser.email;
  const resId = foundUser.id;
  const token = generateAccessToken(resEmail);

  res.send({ token, user: resEmail, id: resId });
};

export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { fullName, email, password } = req.body;

  if (!email || !password || !fullName) {
    res.sendStatus(400);

    return;
  }

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    res.sendStatus(409);

    return;
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = await User.create({
    id: uuidv4(),
    email,
    password: hashedPassword,
    fullName,
  });

  if (!newUser) {
    res.sendStatus(500);

    return;
  }

  res.send({ message: 'Thanks for registering' });
};

export const getFavorites = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { userId } = req.params;

  console.log(userId);

  const foundUser = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!foundUser) {
    res.sendStatus(404);

    return;
  }

  const favorites = foundUser.favorites;

  res.send(favorites);
};

// export const updateFavorites = async (
//   req: Request,
//   res: Response,
// ): Promise<void> => {
//   const { userId } = req.query;

//   const { body } = req;

//   const prepared = body.itemId;

//   const foundUser = await User.findOne({
//     where: {
//       id: userId,
//     },
//   });

//   if (!foundUser) {
//     res.sendStatus(404);

//     return;
//   }

//   if (foundUser.favorites.includes(prepared)) {
//     foundUser.favorites = foundUser.favorites.filter(el => el !== prepared);
//   }

//   let arr = prepared;

//   if (foundUser.favorites?.length > 0) {
//     arr = foundUser.favorites.push(prepared);
//   }

//   await User.update(
//     {
//       favorites: arr,
//     },
//     {
//       where: {
//         id: userId,
//       },
//     },
//   );

//   res.send('Favorites were added');
// };
