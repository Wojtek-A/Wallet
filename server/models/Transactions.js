import mongoose from 'mongoose';

const { Schema } = mongoose;

const TransactionSchema = new Schema({
  type: {
    type: Boolean,
    enum: ['-', '+'],
    required: [true, 'Type is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  category: {
    type: String,
    enum: [
      'Main expenses',
      'Products',
      'Car',
      'Self care',
      'Child care',
      'Household products',
      'Education',
      'Leisure',
      'other expenses',
      'Income',
    ],
    default: 'Income',
  },
  comment: {
    type: String,
    default: null,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  month: {
    type: Number,
  },
  year: {
    type: Number,
  },
});

TransactionSchema.pre('save', function(next) {
  const date = new Date(this.date);
  this.month = date.getMonth() + 1;
  this.year = date.getFullYear();
  next();
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

export { Transaction };

/**
 * @swagger
 *  components:
 *    schemas:
 *      CreateTransactions:
 *        type: object
 *        properties:
 *          type:
 *            type: boolean
 *          amount:
 *            type: number
 *          date:
 *            type: string
 *          category:
 *            type: string
 *          comment:
 *            type: string
 *          owner:
 *            type: string
 *
 *      UpdateTransaction:
 *        type: object
 *        properties:
 *          transactionDate:
 *          type:
 *            type: boolean
 *          amount:
 *            type: number
 *          date:
 *            type: string
 *          category:
 *            type: string
 *          comment:
 *            type: string
 *          owner:
 *            type: string
 *
 *      TransactionCategories:
 *          $ref: '#/definitions/TransactionCategories'
 *
 *      TransactionsSummary:
 *          $ref: '#/definitions/TransactionsSummary'
 *
 *      CreatedTransactions:
 *          $ref: '#/definitions/CreatedTransactions'
 *
 *      GetTransactions:
 *          $ref: '#/definitions/GetTransactions'
 *
 *      UpdatedTransaction:
 *          $ref: '#/definitions/UpdatedTransaction'
 *
 */

/**
 * @swagger
 *  definitions:
 *      CreatedTransactions:
 *        type: object
 *        properties:
 *          type:
 *            type: boolean
 *          amount:
 *            type: number
 *          date:
 *            type: string
 *          category:
 *            type: string
 *          comment:
 *            type: string
 *          owner:
 *            type: string
 *          _id:
 *            type: string
 *          month:
 *            type: number
 *          year:
 *            type: number
 *
 *      GetTransactions:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                      id:
 *                          type: string
 *                      type:
 *                          type: "boolean"
 *                      amount:
 *                          type: number
 *                      date:
 *                          type: string
 *                      category:
 *                          type: string
 *                      comment:
 *                          type: string
 *                      owner:
 *                          type: string
 *                      month:
 *                          type: number
 *                      year:
 *                          type: number
 *
 *      UpdatedTransaction:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *          type:
 *            type: boolean
 *          amount:
 *            type: number
 *          date:
 *            type: string
 *          category:
 *            type: string
 *          comment:
 *            type: string
 *          owner:
 *            type: string
 *          month:
 *            type: number
 *          year:
 *            type: number
 *
 *      TransactionCategories:
 *        message:
 *           type: string
 *        type: array
 *        items:
 *            categories:
 *                type: string
 *
 *      TransactionsSummary:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Successfull
 *          data:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                expenseSummmary:
 *                  type: number
 *                incomeSumarry:
 *                  type: number
 *                categoriesSummary:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      category:
 *                         type: string
 *                      total:
 *                          type: number
 *
 */
