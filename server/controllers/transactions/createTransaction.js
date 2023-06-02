import { Transaction } from "../../models/Transactions.js";
import { User } from "../../models/Users.js";
import { transactionSchema } from "../../schemas/transactionSchema.js";

const createTransaction = async (req, res, next) => {
    const body = req.body;
    console.log("BODY", req.body);
    const { error } = transactionSchema.validate(body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    const amount = Number(body.amount);
    const calc = body.type === true ? amount : amount * -1;
    const user = await User.findById(body.owner);
    user.balance = Number(user.balance) + calc;
    await user.save();

    // const calc = body.type === true ? Number(body.amount) : Number(body.amount) * -1;

    user.balance = user.balance + calc;
    user.save();


    const transaction = await Transaction.create(body);
    res.status(201).json({ data: transaction });
};
export default createTransaction;
