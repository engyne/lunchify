import { Request, Response } from 'express';
import Place from '../models/place';
import { ValidationError } from 'sequelize';

export const getPlaces = async (req: Request, res: Response) => {
  try {
    const places = await Place.findAll();
    res.status(200).json({
    success: true,
    data: places
  });
  } catch (error) {
    console.error('Error fetching places:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to retrieve places'
    });
  }
};

export const getPlaceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const place = await Place.findByPk(id);

    if (!place) {
      res.status(404).json({
        success: false,
        message: `Place with id ${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: place,
    });
  } catch (error) {
    console.error('Error fetching place by id:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to retrieve place',
    });
  }
};

export const createPlace = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, mapUrl } = req.body;

    const newPlace = await Place.create({ name, mapUrl });

    res.status(201).json({
      success: true,
      data: newPlace,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({
        success: false,
        message: `Validation Error: Place with this name already exists`,
      });
    } else {
      console.error('Error creating place:', error);
      res.status(500).json({
        success: false,
        message: 'Server Error: Unable to create place',
      });
    }
  }
};