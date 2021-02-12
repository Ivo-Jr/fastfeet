import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
    async store(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.number().required(),
            complement: Yup.string(),
            state: Yup.string().required(),
            city: Yup.string().required(),
            cep: Yup.number().min(8).required(),
        });

        if (!request.body.number) {
            return response.json({
                message: `If you don't have a number, enter '0'.`,
            });
        }

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Validations fails' });
        }

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
        const list = await Recipient.findAll({
            attributes: [
                'id',
                'name',
                'street',
                'number',
                'complement',
                'state',
                'city',
                'cep',
            ],
        });

        return response.json(list);
    }
}

export default new RecipientController();
