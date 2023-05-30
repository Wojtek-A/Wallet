import {Router} from 'express';
import {auth} from '../middlewares/auth.js';
import {controllerWrapper} from '../helpers/index.js';
import {
    createTransaction,
    deleteTransaction,
    getTransactionController,
    updateTransaction,
} from '../controllers/transactions/index.js';
import {getTransactionById} from '../controllers/transactions/getTransactionById.js';

const router = Router();

router.post('/', auth, controllerWrapper(createTransaction));

router.get('/', auth, controllerWrapper(getTransactionController));

router.put('/:transactionId', auth, controllerWrapper(updateTransaction));

router.delete('/:transactionId', auth, controllerWrapper(deleteTransaction));

router.patch('/:transactionId', auth, controllerWrapper(getTransactionById));

export default router;
