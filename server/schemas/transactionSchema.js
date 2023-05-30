import Joi from 'joi';

const transactionSchema = Joi.object({
    type: Joi.boolean().required(),
    amount: Joi.number().positive().required(),
    date: Joi.string(),
    month: Joi.number(),
    year: Joi.number(),
    category: Joi.string().valid(
        'Main expenses',
        'Products',
        'Car',
        'Self care',
        'Child care',
        'Household products',
        'Education',
        'Leisure',
        'Other expenses',
        'Income'
    ),
    comment: Joi.string().optional(),
    owner: Joi.string().required(),
});

export { transactionSchema };
