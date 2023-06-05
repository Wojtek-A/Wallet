import Joi from "joi";

const transactionSchema = Joi.object({
  type: Joi.boolean().required(),
  amount: Joi.string().required(),
  date: Joi.string(),
  category: Joi.string().valid(
    "Main expenses",
    "Products",
    "Car",
    "Self care",
    "Child care",
    "Household products",
    "Education",
    "Leisure",
    "other expenses",
    "Income"
  ),
  comment: Joi.string().allow(" "),
  owner: Joi.string().required(),
});

export { transactionSchema };
