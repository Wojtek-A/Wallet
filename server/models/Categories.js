import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
    id: {
        type: String,
        enum: [
            "MAIN_EXPENSES",
            "PRODUCTS",
            "CAR",
            "SELF_CARE",
            "CHILD_CARE",
            "HOUSEHOLD_PRODUCTS",
            "EDUCATION",
            "LEISURE",
            "OTHER_EXPENSES",
            "INCOME"
        ],
        required: true,
    },
    name: {
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
        required: true,
    }
});

const Category = mongoose.model(
    "Category",
    CategorySchema
);

export { Category };

