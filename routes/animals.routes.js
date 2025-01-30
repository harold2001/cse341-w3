import { Router } from 'express';
import animalController from '../controllers/animal.controller.js';
import {
  validateCreateAnimal,
  validateUpdateAnimal,
  validateIdParam,
} from '../validators/animal.validator.js';
import { handleValidationErrors } from '../middleware/middleware.js';

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
  validateCreateAnimal,
  handleValidationErrors,
  animalController.createAnimal
);

router.put(
  '/:id',
  validateIdParam,
  validateUpdateAnimal,
  handleValidationErrors,
  animalController.updateAnimalById
);

router.delete(
  '/:id',
  validateIdParam,
  handleValidationErrors,
  animalController.deleteAnimalById
);

export default router;
