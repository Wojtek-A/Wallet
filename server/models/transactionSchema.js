import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    type: {
      enum: ["-", "+"],
    },
    value: {
      type: Number,
    },
    date: {
      type: Date,
    },
    comment: {
      type: String,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false }
);

export const Transaction = model("Transaction", transactionSchema);
