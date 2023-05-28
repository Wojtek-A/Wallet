import { Transaction } from "../models/transaction.schema.js";

export const getAllTransaction = (ownerId) =>
  Transaction.find({ owner: ownerId });

export const getTransactionById = (id, ownerId) =>
  Transaction.findOne({ _id: id, owner: ownerId });

export const createTransaction = (data) => Transaction.create({ ...data });

export const removeTransaction = (id) =>
  Transaction.findByIdAndRemove({ _id: id });

export const updateTransaction = (id, data) =>
  Transaction.findByIdAndUpdate({ _id: id }, { ...data }, { new: true });
