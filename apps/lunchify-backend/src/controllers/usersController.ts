import { Request, Response } from 'express';
import User from '../models/user';
import { ValidationError } from 'sequelize';

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
        where: {
          googleId: id,
        }
      });
      

    if (!user) {
      res.status(404).json({
        success: false,
        message: `User with id ${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Error fetching user by id:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to retrieve user',
    });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { googleId, email, name, picture } = req.body;

    const newPlace = await User.create({ googleId, email, name, picture });

    res.status(201).json({
      success: true,
      data: newPlace,
    });
  } catch (error) {
    // not working as expected
    if (error instanceof ValidationError) {
      res.status(400).json({
        success: false,
        message: `Validation Error: User already exists`,
      });
    } else {
      console.error('Error creating user:', error);
      res.status(500).json({
        success: false,
        message: 'Server Error: Unable to create user',
      });
    }
  }
};