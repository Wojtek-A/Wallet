import { Schem, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      require,
    },
    color: {
      type: String,
      require,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false }
);

export const Category = model("Category", categorySchema);
