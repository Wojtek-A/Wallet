import MobileChart from "../MobileChart/MobileChart";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import css from "./MobileStatistics.module.css";

const MobileStatistics = () => {
  return (
    <>
      <section className={css.navSection}>
        <MobileNavigation />
      </section>
      <section>
        <MobileChart />
      </section>
    </>
  );
};

export default MobileStatistics;
