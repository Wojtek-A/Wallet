import Navigation from "../Navigation/Navigation.jsx";
import Currency from "../Currency/Currency.jsx";
import Balance from "../Balance/Balance.jsx";
import { selectStatisticsDate } from "../../redux/selector";
import { MONTH_NAME } from "../../redux/constant";
import { selectTransactions } from "../../redux/selector";
import { setMonth, setYear } from "../../redux/wallet/wallet.slice";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./Statistics.module.css";
import MobileChart from "../MobileChart/MobileChart";
import MobieStatisticsList from "../MobileStatisticsList/MobieStatisticsList";
import DropdownList from "../DropdownList/DropdownList";
import Dropdown from "../Dropdown/Dropdown";

export const Statistics = () => {
  const statisticsDate = useSelector(selectStatisticsDate);
  const transactions = useSelector(selectTransactions);
  const date = new Date(statisticsDate);
  const month = MONTH_NAME[date.getMonth()];
  const dispatch = useDispatch();

  const transactionsYear = [
    ...new Set(
      useMemo(
        () =>
          transactions.map((elements) => {
            const transactionDate = new Date(elements.date);

            return transactionDate.getFullYear();
          }),
        [transactions, statisticsDate]
      )
    ),
  ];

  const handleYear = (event) => {
    event.preventDefault();

    dispatch(setYear(event.target.textContent));
  };

  const handleMonth = (event) => {
    event.preventDefault();
    const month = MONTH_NAME.indexOf(event.target.textContent);
    dispatch(setMonth(month));
  };

  return (
    <>
      <main className={css.dashboardWrapper}>
        <div className={css.leftWrapper}>
          <section className={css.navSection}>
            <Navigation />
          </section>
          <section className={css.balanceSection}>
            <Balance />
          </section>
          <section className={css.currencySection}>
            <Currency />
          </section>
        </div>

        <section className={css.statisticsSection}>
          <div>
            <MobileChart />
          </div>

          <div className={css.listWrapper}>
            <div className={css.dropdownWrapper}>
              <Dropdown selectedName={month} handleDate={handleMonth}>
                <DropdownList data={Object.values(MONTH_NAME)} />
              </Dropdown>

              <Dropdown
                selectedName={date.getFullYear()}
                handleDate={handleYear}
              >
                <DropdownList data={transactionsYear} />
              </Dropdown>
            </div>
            <MobieStatisticsList />
          </div>
        </section>
      </main>
    </>
  );
};

export default Statistics;
