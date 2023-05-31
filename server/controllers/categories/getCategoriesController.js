import {Category} from "../../models/Categories.js";

const getCategoriesController = async (req, res) => {
    try {
        const categories = await Category.find();
        if (!categories) {
            res.status(404).json({message: "Not found any categories"});
        }
        res
            .status(200)
            .json({message: "Successful operation", data: categories});
    } catch (error) {
        res.status(500).json({message: "Error reading categories"});
    }
};

export {getCategoriesController};
