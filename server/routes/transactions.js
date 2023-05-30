import express from 'express';
import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { controllerWrapper } from '../helpers/index.js';
import {
    createTransaction,
    updateTransaction,
    deleteTransaction,
} from '../controllers/transactions/index.js';
import { getTransactionController } from '../controllers/transactions/index.js';
import { getTransactionById } from '../controllers/transactions/getTransactionById.js';
import { currentUserController } from '../controllers/auth/index.js';

const router = Router();

router.post('/', auth, controllerWrapper(createTransaction));

router.get('/', auth, controllerWrapper(getTransactionController));

router.get('/current', auth, controllerWrapper(currentUserController()));

router.put('/:transactionId', auth, controllerWrapper(updateTransaction));

router.delete('/:transactionId', auth, controllerWrapper(deleteTransaction));

router.patch('/:transactionId', auth, controllerWrapper(getTransactionById));

export default router;
