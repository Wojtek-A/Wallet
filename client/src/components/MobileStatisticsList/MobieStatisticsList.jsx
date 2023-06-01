import { useSelector } from 'react-redux';
import { CHART_COLOR } from '../../redux/constant';
import { CATEGORY_NAME } from '../../redux/constant';
import css from './MobileStatisticsList.module.css';
import { selectStatisticsDate, selectTransactions } from '../../redux/selector';
import clsx from 'clsx';
import { useMemo } from 'react';
import { elements } from 'chart.js';

const MobieStatisticsList = () => {
  const categories = Object.values(CATEGORY_NAME);
  const bgColor = Object.values(CHART_COLOR);
  const transactions = useSelector(selectTransactions);
  const statisticsDate = useSelector(selectStatisticsDate);

  const getTransactionsCategoryValue = useMemo(
    () =>
      transactions.reduce((acc, transaction) => {
        categories.forEach((elements) => (acc[elements] = acc[elements] ?? 0));
        const transactionDate = new Date(transaction.Date);
        const pickDate = new Date(statisticsDate);

        const yearCondition =
          transactionDate.getFullYear() === pickDate.getFullYear();
        const monthCondition =
          transactionDate.getMonth() === pickDate.getMonth();

        if (transaction.Type === '-' && yearCondition && monthCondition) {
          acc[transaction.Category] =
            acc[transaction.Category] - transaction.Value;
        }
        if (transaction.Type === '+' && yearCondition && monthCondition) {
          acc[transaction.Category] =
            acc[transaction.Category] + transaction.Value;
        }

        return acc;
      }, {}),
    [transactions, statisticsDate]
  );

  const transactionsValue = Object.values(getTransactionsCategoryValue);

  const expenseAndIncomeSum = transactions.reduce((acc, ele) => {
    const transactionDate = new Date(ele.Date);
    const pickDate = new Date(statisticsDate);

    const yearCondition =
      transactionDate.getFullYear() === pickDate.getFullYear();
    const monthCondition = transactionDate.getMonth() === pickDate.getMonth();

    if (ele.Type === '-' && yearCondition && monthCondition) {
      acc.expense = (acc.expense || 0) - ele.Value;
    }

    if (ele.Type === '+' && yearCondition && monthCondition) {
      acc.income = (acc.income || 0) - ele.Value;
    }
    return acc;
  }, {});

  console.log(expenseAndIncomeSum);
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
            <p>{transactionsValue[index] ?? '0'}</p>
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
