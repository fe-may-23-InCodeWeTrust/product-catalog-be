/* eslint-disable no-console */
import { sequelize, connect } from './utils/db';
import { Product } from './models';

const products = [
  {
    id: '1',
    category: 'phones',
    phoneId: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.jpg',
  },
  {
    id: '2',
    category: 'phones',
    phoneId: 'apple-iphone-7-plus-32gb-black',
    itemId: 'apple-iphone-7-plus-32gb-black',
    name: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
  },
];

function reset() {
  return sequelize
    .sync({ force: true })
    .catch((error) => console.log('unable to reset table', error));
}

function addProducts() {
  return Product.bulkCreate(products).catch((error: any) =>
    console.log('Unable to create products', error));
}

connect()
  .then(reset)
  .then(addProducts)
  .finally(() => {
    sequelize.close();
  });
