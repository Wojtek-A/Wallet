import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import css from './MobileChart.module.css';
import { useEffect, useMemo, useRef } from 'react';
import { Colors } from 'chart.js';
import { CATEGORY_NAME, CHART_COLOR } from '../../redux/constant';
import { selectTransaction } from '../../redux/selector';
import { useSelector } from 'react-redux';
import { selectStatisticsDate } from '../../redux/selector';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const MobileChart = () => {
  const statisticsDate = useSelector(selectStatisticsDate);
  const chartRef = useRef();
  const categoryName = Object.values(CATEGORY_NAME);
  const chartBg = Object.values(CHART_COLOR);
  const transactions = useSelector(selectTransaction);

  const transactionsValue = categoryName.flatMap((category) =>
    transactions.flatMap((transaction) => {
      const transactionDate = new Date(transaction.Date);
      const pickDate = new Date(statisticsDate);

      const yearCondition =
        transactionDate.getFullYear() === pickDate.getFullYear();
      const monthCondition = transactionDate.getMonth() === pickDate.getMonth();

      if (transaction.Type === '-' && yearCondition && monthCondition) {
        return transaction.Category === category ? -transaction.Value : [];
      }
      if (yearCondition && monthCondition) {
        return transaction.Category === category ? transaction.Value : [];
      }

      return [];
    })
  );

  const transactionSum = useMemo(
    () =>
      transactions.reduce((acc, transaction) => {
        const transactionDate = new Date(transaction.Date);
        const pickDate = new Date(statisticsDate);

        const yearCondition =
          transactionDate.getFullYear() === pickDate.getFullYear();
        const monthCondition =
          transactionDate.getMonth() === pickDate.getMonth();

        if (transaction.Type === '+' && yearCondition && monthCondition)
          return acc + transaction.Value;
        if (yearCondition && monthCondition) return acc - transaction.Value;

        return acc + 0;
      }, 0),
    [transactions, statisticsDate]
  );

  useEffect(() => {
    const updateChartSize = () => chartRef.current.resize();
    window.addEventListener('resize', updateChartSize);
    return () => window.removeEventListener('resize', updateChartSize);
  }, []);

  const data = {
    labels: categoryName,
    datasets: [
      {
        label: 'Cash',
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
