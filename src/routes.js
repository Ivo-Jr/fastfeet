import { Router } from 'express';
import Recipient from './app/models/Recipient';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.get('/teste', async (request, response) => {
    const recipients = await Recipient.create({
        recipient: "Revendedora Maciel",
        street: "Rua Marcondes Homem de Melo",
        number: "748",
        complement: "empresa",        
        state: "São Paulo",
        city: "São Paulo",
        cep: "08275030",
    });

    return response.json(recipients)
})


routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
