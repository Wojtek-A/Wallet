import { Transaction } from "../../models/Transactions.js";

const statisticsController = async (req, res) => {
  const { _id: ownerId } = req.user;
  let { year, month } = req.query;
  year = parseInt(year);
  month = parseInt(month);

  try {
    const pipeline = [
      {
        $match: {
          owner: ownerId,
          year,
          month,
        },
      },
      {
        $group: {
          _id: { category: "$category", type: "$type" },
          total: { $sum: "$amount" },
        },
      },
      {
        $group: {
          _id: null,
          expenseSummary: {
            $sum: {
              $cond: [{ $eq: ["$_id.type", false] }, "$total", 0],
            },
          },
          incomeSummary: {
            $sum: {
              $cond: [{ $eq: ["$_id.type", true] }, "$total", 0],
            },
          },
          categoriesSummary: {
            $push: {
              $cond: [
                { $eq: ["$_id.type", true] },
                { category: "$_id.category", total: "$total" },
                null,
              ],
            },
          },
        },
      },
      {
        $unwind: "$categoriesSummary",
      },
      {
        $match: {
          categoriesSummary: { $ne: null },
        },
      },
      {
        $group: {
          _id: null,
          expenseSummary: { $first: "$expenseSummary" },
          incomeSummary: { $first: "$incomeSummary" },
          categoriesSummary: { $push: "$categoriesSummary" },
        },
      },
      {
        $project: {
          _id: 0,
          expenseSummary: 1,
          incomeSummary: 1,
          categoriesSummary: 1,
        },
      },
    ];
    const result = await Transaction.aggregate(pipeline);

    if (result.length === 0) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Successful", data: result });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};

export { statisticsController };
