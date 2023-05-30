import {User} from "../../models/Users.js";

const logoutController = async (req, res, _) => {
    const { id } = req.user;

    await User.findByIdAndUpdate(id, { token: null });
    return res.status(200).json({
        message: "Logout successful",
    });
};

export default logoutController;
