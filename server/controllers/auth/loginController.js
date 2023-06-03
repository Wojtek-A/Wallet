import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../models/Users.js';

const login = async (req, res, _) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const compareResult = !user && await bcrypt.compare(password, user.password);

    if (!user || !compareResult) {
        res.status(401).json({ message: 'Email or password is wrong' });
        return;
    }
    const payload = {
        id: user._id,
    };
    const { SECRET } = process.env;

    const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

    await User.findByIdAndUpdate(user._id, { token });
    res.status(201).json({
        token: token,
        user: {
            email: user.email,
            name: user.name,
            id: user._id,
        },
    });
};

export default login;
