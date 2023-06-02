import { useSelector } from "react-redux";
import Media from "react-media";

import MobileDashboard from "../../components/MobileDashboard/MobileDashboard";
import TabletDashboard from "../../components/TabletDashboard/TabletDashboard";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Header } from "../../components/Header/Header";

import {
  selectIsModalAddTransactionOpen,
  selectIsModalEditTransactionOpen,
  selectIsModalLogoutOpen,
} from "../../redux/global/selectors.js";
import { ModalAddTransaction } from "../../components/ModalAddTransaction/ModalAddTransaction.jsx";
import { ModalLogout } from "../../components/ModalLogout/ModalLogout.jsx";
import { ModalEditTransaction } from "../../components/ModalEditTransaction/ModalEditTransaction";

const HomePage = () => {
  const isModalAddTransactionOpened = useSelector(
    selectIsModalAddTransactionOpen
  );
  const isModalEditTransactionOpen = useSelector(
    selectIsModalEditTransactionOpen
  );
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);

  return (
    <>
      <Media
        queries={{
          mobile: "(max-width: 767px)",
          tablet: "(min-width: 768px) and (max-width: 1199px)",
          desktop: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Header>
            {matches.mobile && <MobileDashboard />}
            {matches.tablet && <TabletDashboard />}
            {matches.desktop && <Dashboard />}
          </Header>
        )}
      </Media>
      {isModalAddTransactionOpened && <ModalAddTransaction />}
      {isModalEditTransactionOpen && <ModalEditTransaction />}
      {isModalLogoutOpen && <ModalLogout />}
    </>
  );
};

export default HomePage;
