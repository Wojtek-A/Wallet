import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import categoriesRouter from "./routes/categories.js";
import transactionRouter from "./routes/transactions.js";
import statisticsRouter from "./routes/statistics.js";
import swaggerRouter from "./routes/swagger.js";
import logger from "morgan";

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
app.use(cors());

app.use("/api/api-docs", swaggerRouter);
app.use("/api/auth", userRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/transaction-categories", categoriesRouter);
app.use("/api/transactions-summary", statisticsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {

  res.status(500).json({ message: err.message });
});

export default app;
