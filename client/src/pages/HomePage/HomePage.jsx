import Media from "react-media";
import { useSelector } from "react-redux";
import MobileDashboard from "../../components/MobileDashboard/MobileDashboard";
import TabletDashboard from "../../components/TabletDashboard/TabletDashboard";
import Dashboard from "../../components/Dashboard/Dashboard";
import { ButtonAddTransaction } from "../../components/ButtonAddTransactions/ButtonAddTransaction.jsx";
import { selectIsModalAddTransactionOpen } from "../../redux/global/selectors.js";
import { ModalAddTransaction } from "../../components/ModalAddTransaction/ModalAddTransaction.jsx";

const HomePage = () => {
  const isModalAddTransactionOpened = useSelector(
    selectIsModalAddTransactionOpen
  );

  return (
    <Media
      queries={{
        mobile: "(max-width: 767px)",
        tablet: "(min-width: 768px) and (max-width: 1199px)",
        desktop: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <>
          {matches.mobile && <MobileDashboard />}
          {matches.tablet && <TabletDashboard />}
          {matches.desktop && <Dashboard />}

          <ButtonAddTransaction />
          {isModalAddTransactionOpened && <ModalAddTransaction />}
        </>
      )}
    </Media>
  );
};

export default HomePage;
