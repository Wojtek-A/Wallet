const fs = require( "node:fs/promises");
const path = require("path");
const category = path.resolve("./schemas/transactionsSchema.js");

const getCategoriesController = async (req, res) => {
    const dataCategories = await fs.readFile(category, "utf8");
    if (!dataCategories) {
        res.status(404).json({ message: `Not found any categories` });
    }
    res
        .status(200)
        .json({ message: "Successful operation", data: JSON.parse(dataCategories) });
};

module.exports = getCategoriesController;
