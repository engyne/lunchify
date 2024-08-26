import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import sequelize from '../db';

class Place extends Model<InferAttributes<Place>, InferCreationAttributes<Place>> {
  declare id: number;
  declare name: string;
  declare mapUrl: string | null;
}

Place.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mapUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  sequelize,
  tableName: 'Places',
  timestamps: false,
});

export default Place;