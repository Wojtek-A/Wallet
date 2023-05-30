import { Transaction } from "../../models/Transactions.js";
import { User } from "../../models/Users.js";

const deleteTransaction = async (req, res, next) => {
    const transaction = await Transaction.findById(req.params.transactionId);
    if (!transaction) {
        return res.status(404).json({ message: "Transaction not found" });
    }

    const calc =
        transaction.type === true ? transaction.amount * -1 : transaction.amount;
    const user = await User.findById(transaction.owner);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.balance = user.balance + calc;
    user.save();

    await Transaction.findByIdAndDelete(req.params.transactionId);
    res.json({ message: "Transaction deleted" });
};

export default deleteTransaction;
