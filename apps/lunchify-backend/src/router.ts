import express from 'express';
import {
  getPlaces,
  getPlaceById,
} from './controllers/placesController';

const router = express.Router();

// Places
router.get('/api/places', getPlaces);
router.get('/api/places/:id', getPlaceById);

export default router;