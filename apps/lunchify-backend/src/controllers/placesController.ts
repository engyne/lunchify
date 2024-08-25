import { Request, Response } from 'express';
import Place from '../models/place';

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