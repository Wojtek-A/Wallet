import Media from "react-media";

import MobileDashboard from "../../components/MobileDashboard/MobileDashboard";
import TabletDashboard from "../../components/TabletDashboard/TabletDashboard";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Header } from "../../components/Header/Header";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
