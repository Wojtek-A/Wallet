import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { controllerWrapper } from '../helpers/index.js';
import {
  createTransaction,
  deleteTransaction,
  getTransactionController,
  updateTransaction,
} from '../controllers/transactions/index.js';

const router = Router();

router.post('/', auth, controllerWrapper(createTransaction));

/**
 *  @swagger
 *  /api/transactions:
 *      post:
 *          tags: [Transactions Controller]
 *          summary: Create new transaction for logged in user
 *          security: [{"Bearer": []}]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/CreateTransactions'
 *          responses:
 *              201:
 *                  description: Transaction created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/CreatedTransactions'
 *              400:
 *                  description: Validation error
 *              401:
 *                  description: Bearer authorization failed
 *              404:
 *                  description: Transaction category not found
 *              409:
 *                  description: Transaction category type does not match transaction type
 */

router.get('/', auth, controllerWrapper(getTransactionController));

/**
 *  @swagger
 *  /api/transactions:
 *      get:
 *          tags: [Transactions Controller]
 *          summary: Get all transactions for logged in user
 *          security: [{"Bearer": []}]
 *          responses:
 *              201:
 *                  description: Transactions returned
 *                  content:
 *                      application/json:
 *                          schema:
 *                            $ref: '#/definitions/GetTransactions'
 *              400:
 *                  description: Validation error
 *              401:
 *                  description: Bearer authorization failed
 */

router.put('/:transactionId', auth, controllerWrapper(updateTransaction));

router.patch('/:transactionId', auth, controllerWrapper(getTransactionById));

/**
 *  @swagger
 *  /api/transactions/{transactionId}:
 *      patch:
 *          tags: [Transactions Controller]
 *          summary: Update transaction
 *          security: [{"Bearer": []}]
 *          parameters:
 *              -   name: transactionId
 *                  in: path
 *                  type: string
 *                  required: true
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateTransaction'
 *          responses:
 *              201:
 *                  description: Transaction created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/UpdatedTransaction'
 *              400:
 *                  description: Validation error
 *              401:
 *                  description: Not authorized
 *              403:
 *                  description: User does not owns wallet
 *              404:
 *                  description: Transaction or transaction category not found
 */

router.delete('/:transactionId', auth, controllerWrapper(deleteTransaction));

router.patch('/:transactionId', auth, controllerWrapper(getTransactionById));

export default router;
