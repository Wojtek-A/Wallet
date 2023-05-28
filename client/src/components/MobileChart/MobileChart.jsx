import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import css from "./MobileChart.module.css";
import { useEffect, useRef } from "react";
import { Colors } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const MobileChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const updateChartSize = () => chartRef.current.resize();
    window.addEventListener("resize", updateChartSize);
    return () => window.removeEventListener("resize", updateChartSize);
  }, []);

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "ee",
        data: [12, 19, 3, 5, 2, 3, 5, 6, 1, 5, 4, 8],
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
          <p className={css.text}>eee</p>
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
