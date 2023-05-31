import { Router } from 'express';
import {
  signupController,
  loginController,
  logoutController,
  currentUserController,
} from '../controllers/auth/index.js';
import { auth } from '../middlewares/auth.js';

const router = Router();

router.post('/sign-up', signupController);

/**
 *  @swagger
 *  /api/auth/sign-up:
 *      post:
 *          tags: [Users Controller]
 *          summary: Sign up new user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Sign-up'
 *          responses:
 *              201:
 *                  description:
 *                      New User Registered
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/UserLoged'
 *              400:
 *                  description: Validation error
 *              409:
 *                  description:
 *                      User with such email already exists
 */

router.post('/sign-in', loginController);

/**
 *  @swagger
 *  /api/auth/sign-in:
 *      post:
 *          tags: [Users Controller]
 *          summary: Sign in existing user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Log-in'
 *          responses:
 *              201:
 *                  description:
 *                      Created session for existing user
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/UserLoged'
 *              400:
 *                  description: Validation error
 *              403:
 *                  description: Provided password is incorrect
 *              404:
 *                  description: User with such email not found
 */

router.post('/sign-out', auth, logoutController);

/**
 *  @swagger
 *  /api/auth/sign-out:
 *      post:
 *          tags: [Users Controller]
 *          summary: Sign out user
 *          security: [{"Bearer": []}]
 *          responses:
 *              204:
 *                  description: User signed out
 *              401:
 *                  description: Not authorized
 */

router.get('/current', auth, currentUserController);

/**
 *  @swagger
 *  /api/auth/current:
 *      get:
 *          tags: [Users Controller]
 *          summary: Get current user info
 *          security: [{"Bearer": []}]
 *          responses:
 *              200:
 *                  description: Logged user returned
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/User'
 *              401:
 *                  description: Bearer auth failed
 */

export default router;
