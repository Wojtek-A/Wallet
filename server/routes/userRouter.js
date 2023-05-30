import {Router} from 'express';
import {
    signupController,
    loginController,
    logoutController,
    currentUserController,
} from '../controllers/auth/index.js';
import { auth } from '../middlewares/auth.js';

const router = Router();

router.post('/sign-up', signupController);

router.post('/sign-in', loginController);

router.post('/sign-out', auth, logoutController);

router.get('/current', auth, currentUserController);

export default router;
