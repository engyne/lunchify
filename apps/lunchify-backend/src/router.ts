import express from 'express';
import {
  getPlaces,
  getPlaceById,
  createPlace,
} from './controllers/placesController';
import {
  getUserById,
  createUser,
} from './controllers/usersController';

const router = express.Router();

// Places
router.get('/api/places', getPlaces);
router.get('/api/places/:id', getPlaceById);
router.post('/api/places', createPlace);

// Users
router.get('/api/users/:id', getUserById);
router.post('/api/users', createUser);

export default router;