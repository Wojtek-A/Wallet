import Media from "react-media";
import { useSelector } from "react-redux";

import { selectIsModalLogoutOpen } from "../../redux/global/selectors.js";
import MobileExchange from "../../components/MobileExchange/MobileExchange";
import { ModalLogout } from "../../components/ModalLogout/ModalLogout.jsx";
import { Header } from "../../components/Header/Header";

const ExchangePage = () => {
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
            <MobileExchange />
            {/* {matches.mobile &&} */}
            {/* {matches.tablet && </>}
            {matches.desktop && </>} */}
          </Header>
        )}
      </Media>
      {isModalLogoutOpen && <ModalLogout />}
    </>
  );
};

export default ExchangePage;
