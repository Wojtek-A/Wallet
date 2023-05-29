const express = require('express');
const { auth } = require("../middlewares/auth");
const { controllerWrapper } = require("../helpers");
const {
    createTransaction,
    updateTransaction,
    deleteTransaction,
} = require("../controllers/transactions");
const {
    getTransactionController,
} = require("../controllers/transactions/getTransactionController");
const {
    getTransactionById,
} = require("../controllers/transactions/getTransactionById");
const {currentUserController} = require("../controllers/auth/index.js");
const router = express.Router();

router.post("/", auth, controllerWrapper(createTransaction));

router.get("/", auth, controllerWrapper(getTransactionController));

router.get("/current", auth, controllerWrapper(currentUserController()));

router.put("/:transactionId", auth, controllerWrapper(updateTransaction));

router.delete("/:transactionId", auth, controllerWrapper(deleteTransaction));

router.patch("/:transactionId", auth, controllerWrapper(getTransactionById));

module.exports = router;
