import Media from "react-media";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import MobileLoginPage from "../../components/MobileLoginPage/MobileLoginPage";
import TabletLoginPage from "../../components/TabletLoginPage/TabletLoginPage";
import DesktopLoginPage from "../../components/DesktopLoginPage/DesktopLoginPage";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const LoginPage = () => {

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
            {matches.mobile && <MobileLoginPage />}
            {matches.tablet && <TabletLoginPage />}
            {matches.desktop && <DesktopLoginPage />}
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

export default LoginPage;
