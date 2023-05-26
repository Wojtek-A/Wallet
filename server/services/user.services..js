import { User } from "../models/user.schema.js";

export const checkUserExistanceByEmail = (email) => User.findOne({ email });
export const checkUserExistanceById = (id) => User.findById({ _id: id });

export const createUser = (userData) => User.create({ ...userData });

export const deleteUser = (id) => User.findByIdAndRemove({ _id: id });

export const updateUserByEmail = (email, userData) =>
  User.findOneAndUpdate({ email }, { ...userData }, { new: true });

export const updateUserById = (id, userData) =>
  User.findOneAndUpdate({ _id: id }, { ...userData }, { new: true });

export const logoutUser = (id) =>
  User.findByIdAndUpdate(
    { _id: id },
    { accessToken: null, refreshToken: null },
    { new: true }
  );
