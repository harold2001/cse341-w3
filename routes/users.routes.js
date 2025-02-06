import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import {
  validateCreateUser,
  validateUpdateUser,
  validateIdParam,
} from '../validators/user.validator.js';
import { handleValidationErrors } from '../middleware/middleware.js';
import { isAuthenticated } from '../middleware/authentication.js';

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
  isAuthenticated,
  validateCreateUser,
  handleValidationErrors,
  userController.createUser
);

router.put(
  '/:id',
  isAuthenticated,
  validateIdParam,
  validateUpdateUser,
  handleValidationErrors,
  userController.updateUserById
);

router.delete(
  '/:id',
  isAuthenticated,
  validateIdParam,
  handleValidationErrors,
  userController.deleteUserById
);

export default router;
