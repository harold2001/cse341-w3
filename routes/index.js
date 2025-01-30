import { Router } from 'express';
import usersRoutes from './users.routes.js';
import swaggerRoutes from './swagger.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/users', usersRoutes);
router.use('/api-docs', swaggerRoutes);

export default router;
