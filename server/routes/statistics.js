import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { controllerWrapper } from '../helpers/index.js';
import { statisticsController } from '../controllers/statistics/getStatisticsController.js';

const router = Router();

router.get('/transactions-summary', auth, controllerWrapper(statisticsController));

export default router;
