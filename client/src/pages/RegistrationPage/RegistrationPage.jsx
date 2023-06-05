import Media from "react-media";
import MobileRegistrationPage from "../../components/MobileRegistrationPage/MobileRegistrationPage";
import TabletRegistrationPage from "../../components/TabletRegistrationPage/TabletRegistrationPage";
import DesktopRegistrationPage from "../../components/DesktopRegistrationPage/DesktopRegistrationPage";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";

const RegistrationPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader variant={"wallet"} scale={0.5} />
    </div>
  ) : (
    <Media
      queries={{
        mobile: "(max-width: 767px)",
        tablet: "(min-width: 768px) and (max-width: 1199px)",
        desktop: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <>
          {matches.mobile && <MobileRegistrationPage />}
          {matches.tablet && <TabletRegistrationPage />}
          {matches.desktop && <DesktopRegistrationPage />}
        </>
      )}
    </Media>
  );
};

export default RegistrationPage;
