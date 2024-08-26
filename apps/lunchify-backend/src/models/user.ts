import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import sequelize from '../db';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: number;
  declare googleId: number;
  declare name: string;
  declare email: string;
  declare picture: string;
  declare favouritePlaceId: string | null;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  googleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favouritePlaceId: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  tableName: 'Users',
  timestamps: false,
});

export default User;