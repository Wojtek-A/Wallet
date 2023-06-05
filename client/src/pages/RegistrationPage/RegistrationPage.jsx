import Media from "react-media";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import MobileRegistrationPage from "../../components/MobileRegistrationPage/MobileRegistrationPage";
import TabletRegistrationPage from "../../components/TabletRegistrationPage/TabletRegistrationPage";
import DesktopRegistrationPage from "../../components/DesktopRegistrationPage/DesktopRegistrationPage";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const RegistrationPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

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
          <>
            {matches.mobile && <MobileRegistrationPage />}
            {matches.tablet && <TabletRegistrationPage />}
            {matches.desktop && <DesktopRegistrationPage />}
          </>
        )}
      </Media>
      {isRefreshing && (
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
          <RotatingLines strokeColor="grey" />
        </div>
      )}
    </>
  );
};

export default RegistrationPage;
