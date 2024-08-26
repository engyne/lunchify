import express from 'express';
import {
  getPlaces,
  getPlaceById,
  createPlace,
} from './controllers/placesController';

const router = express.Router();

// Places
router.get('/api/places', getPlaces);
router.get('/api/places/:id', getPlaceById);
router.post('/api/places', createPlace);

export default router;