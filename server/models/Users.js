import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Set email for user'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    username: {
      type: String,
      required: [true, 'Name is required'],
    },
    balance: {
      type: Number,
      default: 0,
    },
    token: {
      type: String,
      default: '',
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const User = mongoose.model('User', UserSchema);

export { User };

/**
 * @swagger
 *  components:
 *    schemas:
 *      Sign-up:
 *        type: object
 *        required:
 *          - email
 *          - password
 *          - username
 *        properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            username:
 *              type: string
 *      Log-in:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *
 *      User:
 *          $ref: '#/definitions/User'
 *
 *      UserLoged:
 *          $ref: '#/definitions/UserLoged'
 *
 */

/**
 * @swagger
 *  definitions:
 *      User:
 *        type: object
 *        properties:
 *           email:
 *             type: string
 *           username:
 *             type: string
 *           balance:
 *             type: number
 *           id:
 *             type: string
 *           token:
 *             type: string
 *
 *      UserLoged:
 *        type: object
 *        properties:
 *          token:
 *            type: string
 *          user:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              username:
 *                type: string
 *              id:
 *                type: string
 *
 *      UserSignOut:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Logout successful
 *
 *      Auth:
 *        - username: token
 *          in: header
 *          description: Token assigned to header as bearer-token
 *          required: true
 */
