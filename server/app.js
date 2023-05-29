const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRouter.js');
const categoriesRouter = require("./routes/categories.js");
const transactionRouter = require("./routes/transactions.js");
const statisticsRouter = require("./routes/statistics.js");

const app = express();
app.use(express.json());

app.use(cors());

app.get('/api', (req, res) => {
    res.json({message: 'Hello from node server! TEST!'});
});

app.use("/api/users", userRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/statistics", statisticsRouter);

app.use((req, res) => {
    res.status(404).json({message: 'Not found'});
});

app.use((err, req, res, next) => {
    res.status(500).json({message: err.message});
});

module.exports = app;
