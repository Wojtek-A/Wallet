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
import { selectTransaction } from "../../redux/selector";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const MobileChart = () => {
  const chartRef = useRef();
  const categoryName = Object.values(CATEGORY_NAME);
  const chartBg = Object.values(CHART_COLOR);
  const transactions = useSelector(selectTransaction);

  const transactionsValue = categoryName.flatMap((category) =>
    transactions.flatMap((transaction) => {
      if (transaction.Type === "-")
        return transaction.Category === category ? -transaction.Value : [];
      return transaction.Category === category ? transaction.Value : [];
    })
  );

  const transactionSum = useMemo(
    () =>
      transactions.reduce((acc, transaction) => {
        if (transaction.Type === "+") return acc + transaction.Value;

        return acc - transaction.Value;
      }, 0),
    [transactions]
  );

  console.log(transactionsValue);
  useEffect(() => {
    const updateChartSize = () => chartRef.current.resize();
    window.addEventListener("resize", updateChartSize);
    return () => window.removeEventListener("resize", updateChartSize);
  }, []);

  const data = {
    labels: categoryName,
    datasets: [
      {
        label: "Cash",
        data: transactionsValue,
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
        <h3 className={css.title}>Statistics</h3>
        <div className={css.chartWrapper}>
          <p className={css.text}>{`PLN  ${transactionSum}`}</p>
          <Doughnut
            ref={chartRef}
            data={data}
            options={options}
            redraw="true"
            updateMode="resize"
          />
        </div>
      </div>
    </>
  );
};

export default MobileChart;
