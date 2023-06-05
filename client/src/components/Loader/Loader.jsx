import React from "react";
import WalletLoader from "../../assets/image/WalletLoader.gif";
import css from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({ variant, scale }) => {
  let code;
  switch (variant) {
    case "wallet":
      code = (
        <img
          src={WalletLoader}
          className={css.img}
          alt=""
          style={{ scale: `${scale}` }}
        />
      );
      break;
    default:
      code = <RotatingLines />;
      break;
  }
  return code;
};

export default Loader;
