import mongoose from "mongoose";

const { Schema } = mongoose;

const TransactionSchema = new Schema({
    type: {
        type: Boolean,
        enum: ["-", "+"],
        required: [true, "Type is required"],
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    category: {
        type: String,
        enum: [
            "Main expenses",
            "Products",
            "Car",
            "Self care",
            "Child care",
            "Household products",
            "Education",
            "Leisure",
            "other expenses",
            "Income",
        ],
        default: "Income",
    },
    comment: {
        type: String,
        default: null,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    month: {
        type: Number,
    },
    year: {
        type: Number,
    },
});

TransactionSchema.pre("save", function (next) {
    const date = new Date(this.date);
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    next();
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

export { Transaction };
