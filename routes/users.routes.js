import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import {
  validateCreateUser,
  validateUpdateUser,
  validateIdParam,
} from '../validators/user.validator.js';
import { handleValidationErrors } from '../middleware/middleware.js';

const router = Router();

router.get('/', userController.getUsers);

router.get(
  '/:id',
  validateIdParam,
  handleValidationErrors,
  userController.getUserById
);

router.post(
  '/',
  validateCreateUser,
  handleValidationErrors,
  userController.createUser
);

router.put(
  '/:id',
  validateIdParam,
  validateUpdateUser,
  handleValidationErrors,
  userController.updateUserById
);

router.delete(
  '/:id',
  validateIdParam,
  handleValidationErrors,
  userController.deleteUserById
);

export default router;
