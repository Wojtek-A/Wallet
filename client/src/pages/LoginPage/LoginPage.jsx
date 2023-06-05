import Media from "react-media";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import MobileLoginPage from "../../components/MobileLoginPage/MobileLoginPage";
import TabletLoginPage from "../../components/TabletLoginPage/TabletLoginPage";
import DesktopLoginPage from "../../components/DesktopLoginPage/DesktopLoginPage";
import Loader from "../../components/Loader/Loader";

const LoginPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  //   const isRefreshing = true;

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
          {matches.mobile && <MobileLoginPage />}
          {matches.tablet && <TabletLoginPage />}
          {matches.desktop && <DesktopLoginPage />}
        </>
      )}
    </Media>
  );
};

export default LoginPage;
