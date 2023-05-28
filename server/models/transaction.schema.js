import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    type: {
      enum: ["-", "+"],
      required,
    },
    value: {
      type: Number,
      required,
    },
    date: {
      type: Date,
      required,
    },
    comment: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required,
    },
  },
  { versionKey: false }
);

export const Transaction = model("Transaction", transactionSchema);
