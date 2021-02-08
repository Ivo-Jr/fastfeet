import User from '../models/User';

class UserController {
    async update(request, response) {
        const { oldPassword } = request.body;

        const user = await User.findByPk(request.userId);

        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return response
                .status(401)
                .json({ error: 'Password does not match' });
        }

        const { id, name, email } = await user.update(request.body);

        return response.json({
            id,
            name,
            email,
        });
    }
}

export default new UserController();
