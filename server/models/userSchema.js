import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    accessToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

export const User = model("User", userSchema);
