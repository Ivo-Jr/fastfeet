import Recipient from '../models/Recipient';

class RecipientController {
    async store(request, response) {
        const nameExists = await Recipient.findOne({
            where: { name: request.body.name },
        });

        if (nameExists) {
            return response.status(400).json({ error: 'Name alredy exists' });
        }

        const {
            name,
            street,
            number,
            complement,
            state,
            city,
            cep,
        } = await Recipient.create(request.body);

        return response.json({
            name,
            street,
            number,
            complement,
            state,
            city,
            cep,
        });
    }

    async index(request, response) {
        const {
            name,
            street,
            number,
            complement,
            state,
            city,
            cep,
        } = await Recipient.findOne();

        return response.json({
            name,
            street,
            number,
            complement,
            state,
            city,
            cep,
        });
    }
}

export default new RecipientController();
