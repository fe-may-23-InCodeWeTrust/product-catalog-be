/* eslint-disable no-shadow */
import 'express-serve-static-core';

export interface ProductType {
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface User {
  id:string;
  password: string;
  fullName: string;
  email:string;
  createdAt: Date;
}

declare module 'express' {
  export interface Request {
    user?: User
  }
}
