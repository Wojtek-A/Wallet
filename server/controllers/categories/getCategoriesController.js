import { readFile } from "node:fs/promises";
import path from "path";

const category = path.resolve("./schemas/transactionsSchema.js");

const getCategoriesController = async (req, res) => {
    try {
        const dataCategories = await readFile(category, "utf8");
        if (!dataCategories) {
            res.status(404).json({ message: "Not found any categories" });
        }
        res
            .status(200)
            .json({ message: "Successful operation", data: JSON.parse(dataCategories) });
    } catch (error) {
        res.status(500).json({ message: "Error reading categories" });
    }
};

export { getCategoriesController };
