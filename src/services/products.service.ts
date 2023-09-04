import { Accessory } from '../models/Accessory';
import { Phone } from '../models/Phone';
import { Tablet } from '../models/Tablet';

export const getOnePhone = async(id: string) => {
  return Phone.findByPk(id);
};

export const getOneTablet = async(id: string) => {
  return Tablet.findByPk(id);
};

export const getOneAccessory = async(id: string) => {
  return Accessory.findByPk(id);
};
