/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { User } from '../models/User';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { generateAccessToken } from '../services/products.service';

dotenv.config();

export const getOneUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const defaultReturnObject = { authenticated: false, user: null };
  const { email, password } = req.body;

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
    res.status(400).json(defaultReturnObject);

    return;
  }

  const { password: hashedPassword } = foundUser;
  const isMatch = await bcrypt.compare(password, hashedPassword);

  if (!isMatch) {
    res.sendStatus(400).send({ msg: 'Invalid Email Or Password' });

    return;
  }

  const resEmail = foundUser.email;
  const favorites = foundUser.favorites;
  const token = generateAccessToken(resEmail);

  res.send({ token, user: resEmail, favorites });
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

  const alreadyExistsUser = await User.findAll({ where: { email } });

  if (alreadyExistsUser) {
    res.sendStatus(409).send({ message: 'User with email already exists!' });
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = await User.create({
    email,
    password: hashedPassword,
    fullName,
  });

  if (!newUser) {
    res.sendStatus(500).send({ err: 'Server error' });
  }

  res.sendStatus(201).send({ message: 'Thanks for registering' });
};

export const updateFavorites = async(
  req: Request,
  res: Response,
): Promise<void> => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    res
      .sendStatus(404)
      .send({ message: 'Please login to add some goods to favorites' });
  }

  const { body } = req;

  if (user) {
    user.favorites = body;
  }

  await user?.save();

  res.sendStatus(200).send('Favorites were added');
};
