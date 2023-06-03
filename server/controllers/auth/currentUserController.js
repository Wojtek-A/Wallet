import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../models/Users.js";

const currentUserController = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const { email, username, balance, _id } = user;
    if (!user) {
      res.status(401).json({ message: "There is no such user" });
    }

    const { SECRET } = process.env;

    const token = jwt.sign(
      {
        id: user._id,
      },
      SECRET,
      { expiresIn: "1h" }
    );
    console.log("user: ", user);
    res.status(200).json({ email, username, balance, _id, token });
  } catch (error) {
    console.log(error);
    // Handle error
  }
};

export default currentUserController;
