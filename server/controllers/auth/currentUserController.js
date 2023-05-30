import jwt from 'jsonwebtoken';
import { User } from '../../models/Users.js';

const SECRET = process.env.SECRET;

const currentUserController = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const { email, name, balance, _id } = user;
        if (!user) {
            return res.json({ message: 'There is no such user' });
        }

        const token = jwt.sign(
            {
                id: user._id,
            },
            SECRET,
            { expiresIn: '1h' }
        );

        return res.json({ email, name, balance, _id, token });
    } catch (error) {
        // Handle error
    }
};

export default currentUserController;
