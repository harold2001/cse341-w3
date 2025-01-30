import { body, param } from 'express-validator';

export const validateCreateUser = [
  body('firstName')
    .notEmpty()
    .withMessage('First name is required')
    .isString()
    .withMessage('First name must be a string'),
  body('lastName')
    .notEmpty()
    .withMessage('Last name is required')
    .isString()
    .withMessage('Last name must be a string'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('phone')
    .notEmpty()
    .withMessage('Phone is required')
    .isMobilePhone()
    .withMessage('Invalid phone number format'),
  body('address')
    .notEmpty()
    .withMessage('Address is required')
    .isString()
    .withMessage('Address must be a string'),
  body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt({ min: 0 })
    .withMessage('Age must be a positive integer'),
  body('isActive')
    .notEmpty()
    .withMessage('isActive is required')
    .isBoolean()
    .withMessage('isActive must be a boolean'),
];

export const validateUpdateUser = [
  param('id')
    .notEmpty()
    .withMessage('User ID is required')
    .isMongoId()
    .withMessage('Invalid ID format'),
  body('firstName')
    .optional()
    .isString()
    .withMessage('First name must be a string'),
  body('lastName')
    .optional()
    .isString()
    .withMessage('Last name must be a string'),
  body('email').optional().isEmail().withMessage('Invalid email format'),
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Invalid phone number format'),
  body('address').optional().isString().withMessage('Address must be a string'),
  body('age')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Age must be a positive integer'),
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean'),
];

export const validateIdParam = [
  param('id')
    .notEmpty()
    .withMessage('User ID is required')
    .isMongoId()
    .withMessage('Invalid ID format'),
];
