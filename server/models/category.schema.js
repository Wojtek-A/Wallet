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
  },
  { versionKey: false }
);

export const Category = model("Category", categorySchema);
