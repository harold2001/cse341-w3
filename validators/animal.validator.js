import { body, param } from 'express-validator';

export const validateCreateAnimal = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string'),
  body('species')
    .notEmpty()
    .withMessage('Species is required')
    .isString()
    .withMessage('Species must be a string'),
  body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt({ min: 0 })
    .withMessage('Age must be a positive integer'),
  body('color')
    .notEmpty()
    .withMessage('Color is required')
    .isString()
    .withMessage('Color must be a string'),
  body('weight')
    .notEmpty()
    .withMessage('Weight is required')
    .isFloat({ min: 0 })
    .withMessage('Weight must be a positive number'),
  body('habitat')
    .notEmpty()
    .withMessage('Habitat is required')
    .isString()
    .withMessage('Habitat must be a string'),
  body('isEndangered')
    .notEmpty()
    .withMessage('isEndangered is required')
    .isBoolean()
    .withMessage('isEndangered must be a boolean'),
];

export const validateUpdateAnimal = [
  param('id')
    .notEmpty()
    .withMessage('Animal ID is required')
    .isMongoId()
    .withMessage('Invalid ID format'),
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string'),
  body('species')
    .notEmpty()
    .withMessage('Species is required')
    .isString()
    .withMessage('Species must be a string'),
  body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt({ min: 0 })
    .withMessage('Age must be a positive integer'),
  body('color')
    .notEmpty()
    .withMessage('Color is required')
    .isString()
    .withMessage('Color must be a string'),
  body('weight')
    .notEmpty()
    .withMessage('Weight is required')
    .isFloat({ min: 0 })
    .withMessage('Weight must be a positive number'),
  body('habitat')
    .notEmpty()
    .withMessage('Habitat is required')
    .isString()
    .withMessage('Habitat must be a string'),
  body('isEndangered')
    .notEmpty()
    .withMessage('isEndangered is required')
    .isBoolean()
    .withMessage('isEndangered must be a boolean'),
];

export const validateIdParam = [
  param('id')
    .notEmpty()
    .withMessage('Animal ID is required')
    .isMongoId()
    .withMessage('Invalid ID format'),
];
