import { auth } from '../middlewares/auth.js';
import { controllerWrapper } from '../helpers/index.js';
import { getCategoriesController } from '../controllers/categories/getCategoriesController.js';
import express from 'express';
const router = express.Router();

router.get('/', auth, controllerWrapper(getCategoriesController));

/**
 *  @swagger
 *  /api/categories:
 *      get:
 *          tags: [Transactions Categories]
 *          summary: Get transaction categories for logged in user
 *          security: [{"Bearer": []}]
 *          responses:
 *              200:
 *                  description: Transactions categories returned
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/TransactionCategories'
 *              401:
 *                  description: Bearer auth failed
 */

export default router;
