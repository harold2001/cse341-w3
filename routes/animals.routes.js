import { Router } from 'express';
import animalController from '../controllers/animal.controller.js';
import {
  validateCreateAnimal,
  validateUpdateAnimal,
  validateIdParam,
} from '../validators/animal.validator.js';
import { handleValidationErrors } from '../middleware/middleware.js';
import { isAuthenticated } from '../middleware/authentication.js';

const router = Router();

router.get('/', animalController.getAnimals);

router.get(
  '/:id',
  validateIdParam,
  handleValidationErrors,
  animalController.getAnimalById
);

router.post(
  '/',
  isAuthenticated,
  validateCreateAnimal,
  handleValidationErrors,
  animalController.createAnimal
);

router.put(
  '/:id',
  isAuthenticated,
  validateIdParam,
  validateUpdateAnimal,
  handleValidationErrors,
  animalController.updateAnimalById
);

router.delete(
  '/:id',
  isAuthenticated,
  validateIdParam,
  handleValidationErrors,
  animalController.deleteAnimalById
);

export default router;
