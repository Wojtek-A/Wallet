import { Double } from 'mongodb';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const TransactionSchema = new Schema({
  type: {
    type: Boolean,
    enum: ['-', '+'],
    required: [true, 'Type is required'],
  },
  amount: {
    type: String,
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

TransactionSchema.pre('save', function (next) {
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
 *          transactionDate:
 *            type: string
 *          type:
 *            type: "string"
 *            "example": "INCOME"
 *          categoryId:
 *            type: string
 *          comment:
 *            type: string
 *          amount:
 *            type: number
 *
 *      UpdateTransaction:
 *        type: object
 *        properties:
 *          transactionDate:
 *            type: string
 *          type:
 *            type: "string"
 *            "example": "INCOME"
 *          categoryId:
 *            type: string
 *          comment:
 *            type: string
 *          amount:
 *            type: number
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
 *          id:
 *            type: string
 *          transactionDate:
 *            type: string
 *          type:
 *            type: "string"
 *            "example": "INCOME"
 *          categoryId:
 *            type: string
 *          userId:
 *            type: string
 *          comment:
 *            type: string
 *          amount:
 *            type: number
 *          balanceAfter:
 *            type: number
 *
 *      GetTransactions:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                      id:
 *                          type: string
 *                      transactionDate:
 *                          type: string
 *                      type:
 *                          type: "string"
 *                          "example": "INCOME"
 *                      categoryId:
 *                          type: string
 *                      userId:
 *                          type: string
 *                      comment:
 *                          type: string
 *                      amount:
 *                          type: number
 *                      balanceAfter:
 *                          type: number
 *
 *      UpdatedTransaction:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *          transactionDate:
 *            type: string
 *          type:
 *            type: "string"
 *            "example": "INCOME"
 *          categoryId:
 *            type: string
 *          userId:
 *            type: string
 *          comment:
 *            type: string
 *          amount:
 *            type: number
 *          balanceAfter:
 *            type: number
 *
 *      TransactionCategories:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *              name:
 *                  type: string
 *              type:
 *                  type: string
 *                  "example": INCOME
 *
 *      TransactionsSummary:
 *        type: object
 *        properties:
 *          categorySummary:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                type:
 *                  type: string
 *                  example: INCOME
 *                total:
 *                  type: string
 *          incomeSummary:
 *            type: number
 *          expenseSummary:
 *            type: number
 *          periodTotal:
 *            type: number
 *          year:
 *            type: number
 *          month:
 *            type: number
 *
 */
