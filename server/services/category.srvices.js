import { Category } from "../models/category.schema";

export const getAllCategory = (ownerId) => Category.find({ owner: ownerId });

export const getCategoryByName = (ownerId, name) =>
  Category.findOne({ name, owner: ownerId });

export const createCategory = (data) => Category.create({ ...data });

export const removeCategory = (id) => Category.findByIdAndRemove({ _id: id });

export const updateCategory = (id, data) =>
  Category.findByIdAndUpdate({ _id: id }, { ...data }, { new: true });
