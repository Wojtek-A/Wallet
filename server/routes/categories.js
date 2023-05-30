import { auth } from '../middlewares/auth.js';
import { controllerWrapper } from '../helpers/index.js';
import { getCategoriesController } from '../controllers/categories/getCategoriesController.js';
import express from "express";
const router = express.Router();

router.get("/", auth, controllerWrapper(getCategoriesController));

export default router;

