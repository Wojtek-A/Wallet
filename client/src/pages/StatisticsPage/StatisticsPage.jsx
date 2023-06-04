import Media from "react-media";
import { useSelector } from "react-redux";

import { selectIsModalLogoutOpen } from "../../redux/global/selectors.js";
import MobileStatistics from "../../components/MobileStatistics/MobileStatistics";
import { ModalLogout } from "../../components/ModalLogout/ModalLogout.jsx";
import { Header } from "../../components/Header/Header";
import TabletStatistics from "../../components/TabletStatstics/TabletStatistics.jsx";

const StatisticsPage = () => {
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
            {matches.mobile && <MobileStatistics />}
            {matches.tablet && <TabletStatistics />}
          </Header>
        )}
      </Media>
      {isModalLogoutOpen && <ModalLogout />}
    </>
  );
};

export default StatisticsPage;
