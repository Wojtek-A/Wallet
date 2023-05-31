import Joi from 'joi';

const transactionSchema = Joi.object({
    type: Joi.boolean().required(),
    amount: Joi.number().positive().required(),
    date: Joi.date(),
    month: Joi.number(),
    year: Joi.number(),
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
        "Income",
    ),
    comment: Joi.string().required().default(null),
    owner: Joi.string().required(),
});

export { transactionSchema };
