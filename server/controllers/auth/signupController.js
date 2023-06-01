import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { User } from '../../models/Users.js';
import { userSchema } from '../../schemas/userSchema.js';
import dotenv from "dotenv";
dotenv.config();
const { SECRET } = process.env;

const signupController = async (req, res, _) => {
  const { email, password, username } = req.body;
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({ message: 'Email in use' });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    password: hashPassword,
    username,
  });
  const token = jwt.sign({ userId: newUser._id }, SECRET, { expiresIn: '1h' });

  res.status(201).json({
    user: {
      email: newUser.email,
      username: newUser.username,
      data: { token },
    },
    token: token,
  });
};

export default signupController;
