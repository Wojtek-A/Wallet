const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth");
const { controllerWrapper } = require("../helpers");

const { auth } = require("../middlewares/auth");

router.post("/sign-up", authController.signupController);

router.post("/sign-in", authController.loginController);

router.post("/sign-out", auth, authController.logoutController);

router.get(
    "/current",
    auth,
    controllerWrapper(authController.currentUserController)
);

module.exports = router;

