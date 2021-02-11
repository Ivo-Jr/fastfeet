import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/recipient', RecipientController.store);

routes.use(authMiddleware);

routes.get('/list', RecipientController.index);

routes.put('/users', UserController.update);

export default routes;
