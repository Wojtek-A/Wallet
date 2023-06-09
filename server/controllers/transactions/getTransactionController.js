import { Transaction } from "../../models/Transactions.js";

const getTransactionController = async (req, res) => {
    const { _id: owner } = req.user;
    const allTransactions = await Transaction.find({ owner: owner }).sort({
        date: -1,
    });
    res.status(200).json({ data: allTransactions });

    if (!allTransactions) {
        res.status(404, "Not found");
    }
};

export default getTransactionController;
