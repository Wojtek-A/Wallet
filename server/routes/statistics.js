import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { controllerWrapper } from '../helpers/index.js';
import { statisticsController } from '../controllers/statistics/getStatisticsController.js';

const router = Router();

router.get('/', auth, controllerWrapper(statisticsController));

/**
 *  @swagger
 *  /api/transactions-summary:
 *      get:
 *          tags: [Transactions Summary]
 *          summary: Get transactions summary for period
 *          security: [{"Bearer": []}]
 *          responses:
 *              200:
 *                  description: Transactions sumnmary returned
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/TransactionsSummary'
 *              400:
 *                  description: Validation error
 *              401:
 *                  description: Bearer auth failed
 */

export default router;
