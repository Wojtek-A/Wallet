import React from "react";
import WalletLoader from "../../assets/image/WalletLoader.gif";
import css from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({ variant }) => {
  let code;
  switch (variant) {
    case "wallet":
      code = <img src={WalletLoader} className={css.img} alt="WalletLoader" />;
      break;
    default:
      code = <RotatingLines />;
      break;
  }
  return <div className={css.loaderBox}>{code}</div>;
};

export default Loader;
