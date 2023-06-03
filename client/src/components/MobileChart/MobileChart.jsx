import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  elements,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import css from "./MobileChart.module.css";
import { useEffect, useMemo, useRef } from "react";
import { Colors } from "chart.js";
import { CATEGORY_NAME, CHART_COLOR } from "../../redux/constant";
import { selectTransactions } from "../../redux/selector";
import { useSelector } from "react-redux";
import { selectStatisticsDate } from "../../redux/selector";
import empty from "../../assets/image/empty.png";
import Empty from "../Empty/Empty";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const MobileChart = () => {
  const statisticsDate = useSelector(selectStatisticsDate);
  const chartRef = useRef();
  const transactions = useSelector(selectTransactions);

  const getTransactionsCategoryValue = transactions.reduce(
    (acc, transaction) => {
      const transactionDate = new Date(transaction.date);
      const pickDate = new Date(statisticsDate);

      const yearCondition =
        transactionDate.getFullYear() === pickDate.getFullYear();
      const monthCondition = transactionDate.getMonth() === pickDate.getMonth();

      if (!transaction.type && yearCondition && monthCondition) {
        acc[transaction.category] =
          (acc[transaction.category] ?? 0) - transaction.amount;
      }
      if (transaction.type && yearCondition && monthCondition) {
        acc[transaction.category] =
          (acc[transaction.category] ?? 0) + transaction.amount;
      }

      return acc;
    },
    {}
  );
  console.log(getTransactionsCategoryValue);
  const categoryName = Object.keys(getTransactionsCategoryValue);
  const transactionsCategorySum = Object.values(getTransactionsCategoryValue);
  const chartBg = categoryName.map((elements) => {
    const CategoryValues = Object.values(CATEGORY_NAME);
    const bgColorKeys = Object.keys(CHART_COLOR);
    const indexOfCategory = CategoryValues.indexOf(elements);
    return CHART_COLOR[bgColorKeys[indexOfCategory]];
  });

  const sumOfAllTransactions = useMemo(
    () =>
      transactions.reduce((acc, transaction) => {
        const transactionDate = new Date(transaction.date);
        const pickDate = new Date(statisticsDate);

        const yearCondition =
          transactionDate.getFullYear() === pickDate.getFullYear();
        const monthCondition =
          transactionDate.getMonth() === pickDate.getMonth();

        if (transaction.type && yearCondition && monthCondition)
          return acc + transaction.amount;
        if (yearCondition && monthCondition) return acc - transaction.amount;

        return acc + 0;
      }, 0),
    [transactions, statisticsDate]
  );

  useEffect(() => {
    const updateChartSize = () => {
      if (transactionsCategorySum?.length === 0) return;

      chartRef.current.resize();
    };
    window.addEventListener("resize", updateChartSize);
    return () => window.removeEventListener("resize", updateChartSize);
  }, [getTransactionsCategoryValue]);

  const data = {
    labels: categoryName,
    datasets: [
      {
        label: "Cash",
        data: transactionsCategorySum,
        backgroundColor: chartBg,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className={css.container}>
        {transactionsCategorySum?.length === 0 && <Empty />}
        {transactionsCategorySum?.length !== 0 && (
          <>
            <h3 className={css.title}>Statistics</h3>
            <div className={css.chartWrapper}>
              <p className={css.text}>{`PLN  ${sumOfAllTransactions}`}</p>
              <Doughnut
                ref={chartRef}
                data={data}
                options={options}
                redraw="true"
                updateMode="resize"
              />
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default MobileChart;
