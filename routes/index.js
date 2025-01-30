import { Router } from 'express';
import swaggerRoutes from './swagger.js';
import usersRoutes from './users.routes.js';
import animalsRoutes from './animals.routes.js';

const router = Router();

router.get('/', (req, res) => {
  // #swagger.tags = ['Root']
  res.send('Hello World!');
});

router.use('/users', usersRoutes);
router.use('/animals', animalsRoutes);
router.use('/api-docs', swaggerRoutes);

export default router;
