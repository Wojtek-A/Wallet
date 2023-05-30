import {User} from "../../models/Users.js";

const logoutController = async (req, res) => {
    const { _id } = req.user;

    await User.findByIdAndUpdate(_id, { token: null });
    res.status(200).json({
        message: "Logout successful",
    });
};

export default logoutController;
