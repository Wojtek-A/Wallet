import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required,
    },
    password: {
      type: String,
      required,
    },
    email: {
      type: String,
      required,
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

export const User = model("User", userSchema);
