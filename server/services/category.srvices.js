import { Category } from "../models/category.schema";

export const getAllCategory = () => Category.find();

export const getCategoryByName = (name) => Category.findOne({ name });

export const createCategory = (data) => Category.create({ ...data });

export const removeCategory = (id) => Category.findByIdAndRemove({ _id: id });

export const updateCategory = (id, data) =>
  Category.findByIdAndUpdate({ _id: id }, { ...data }, { new: true });
