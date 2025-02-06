import { Router } from 'express';
import swaggerRoutes from './swagger.js';
import usersRoutes from './users.routes.js';
import animalsRoutes from './animals.routes.js';
import passport from 'passport';

const router = Router();

router.get('/', (req, res) => {
  // #swagger.tags = ['Root']
  res.send('Hello World!');
});

router.use('/users', usersRoutes);
router.use('/animals', animalsRoutes);
router.use('/api-docs', swaggerRoutes);

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/');
  });
});

export default router;
