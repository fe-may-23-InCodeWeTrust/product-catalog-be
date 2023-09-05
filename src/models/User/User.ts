import { Model, Column, Table, DataType } from 'sequelize-typescript';
import { ProductType } from '../../types';

@Table({
  tableName: 'users',
  updatedAt: false,
})
export class User extends Model {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  favorites: ProductType[];
}
