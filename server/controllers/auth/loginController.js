const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/Users");
const { SECRET } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const compareResult = await bcrypt.compare(password, user.password);

    if (!user || !compareResult) {
        res.status(401).json({ message: "Email or password is wrong" });
    }
    const payload = {
        id: user._id,
    };
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });

    await User.findByIdAndUpdate(user._id, { token });
    res.status(201).json({
        token,
        user: {
            email: user.email,
            name: user.name,
            id: user._id,
        },
    });
};

module.exports = login;
