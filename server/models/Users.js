const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Set email for user"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Set password for user"],
    },
    username: {
        type: String,
        required: [true, "Name is required"],
    },
        balance: {
            type: Number,
            default: 0,
        },
    token: {
        type: String,
        default: "",
    },
        accessToken: {
            type: String,
            default: null,
        },
        refreshToken: {
            type: String,
            default: null,
        },
        verify: {
            type: Boolean,
            default: false,
        },
    },
    { versionKey: false }
);

const Users = mongoose.model("User", UserSchema);

module.exports = {
    User: Users,
};
