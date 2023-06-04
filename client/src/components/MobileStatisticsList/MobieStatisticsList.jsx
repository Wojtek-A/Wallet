import { useSelector } from "react-redux";
import { CHART_COLOR } from "../../redux/constant";
import { CATEGORY_NAME } from "../../redux/constant";
import css from "./MobileStatisticsList.module.css";
import { selectStatisticsDate, selectTransactions } from "../../redux/selector";
import clsx from "clsx";

const MobieStatisticsList = () => {
  const categories = Object.values(CATEGORY_NAME);
  const bgColor = Object.values(CHART_COLOR);
  const transactions = useSelector(selectTransactions);
  const statisticsDate = useSelector(selectStatisticsDate);

  const getTransactionsCategoryValue = transactions.reduce(
    (acc, transaction) => {
      categories.forEach((elements) => (acc[elements] = acc[elements] ?? 0));
      const transactionDate = new Date(transaction.date);
      const pickDate = new Date(statisticsDate);

      const yearCondition =
        transactionDate.getFullYear() === pickDate.getFullYear();
      const monthCondition = transactionDate.getMonth() === pickDate.getMonth();

      if (!transaction.type && yearCondition && monthCondition) {
        acc[transaction.category] =
          acc[transaction.category] - transaction.amount;
      }
      if (transaction.type && yearCondition && monthCondition) {
        acc[transaction.category] =
          acc[transaction.category] + transaction.amount;
      }

      return acc;
    },
    {}
  );

  const transactionsValue = Object.values(getTransactionsCategoryValue);

  const expenseAndIncomeSum = transactions.reduce((acc, ele) => {
    const transactionDate = new Date(ele.date);
    const pickDate = new Date(statisticsDate);

    const yearCondition =
      transactionDate.getFullYear() === pickDate.getFullYear();
    const monthCondition = transactionDate.getMonth() === pickDate.getMonth();

    if (!ele.type && yearCondition && monthCondition) {
      acc.expense = (acc.expense || 0) - ele.amount;
    }

    if (ele.type && yearCondition && monthCondition) {
      acc.income = (acc.income || 0) + ele.amount;
    }
    return acc;
  }, {});

  return (
    <ul className={css.grid}>
      <li className={clsx(css.item, css.firtItem)}>
        <p>Category</p>
        <p>Sum</p>
      </li>
      {categories.map((category, index) => {
        return (
          <li className={clsx(css.item, css.otherItem)} key={index}>
            <span
              className={css.box}
              style={{ backgroundColor: bgColor[index] }}
            ></span>
            <p>{category}</p>
            <p>{transactionsValue[index] ?? "0"}</p>
          </li>
        );
      })}
      <li className={clsx(css.item, css.itemSum)}>
        <p>Expense</p>
        <p className={css.expense}> {expenseAndIncomeSum?.expense ?? 0}</p>
      </li>
      <li className={clsx(css.item, css.itemSum)}>
        <p>Income:</p>
        <p className={css.income}> {expenseAndIncomeSum?.income ?? 0}</p>
      </li>
    </ul>
  );
};

export default MobieStatisticsList;
