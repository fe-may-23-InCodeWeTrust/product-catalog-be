import { Model, Column, Table, DataType } from 'sequelize-typescript';

interface Description {
  title: string
  text: string[]
}

@Table({
  tableName: 'phones',
  createdAt: false,
  updatedAt: false,
})
export class Phone extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
    id: string;

  @Column({
    type: DataType.STRING,
  })
    category: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    namespaceId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    name: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
    capacityAvailable: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    capacity: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    priceRegular: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    priceDiscount: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
    colorsAvailable: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    color: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    images: string[];

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    description: Description[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    screen: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    resolution: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    processor: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    ram: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    camera: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    zoom: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
    cell: string[];
}
