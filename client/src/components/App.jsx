import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ButtonAddTransactions } from "./ButtonAddTransactions/ButtonAddTransactions";

export const App = () => {
  const MobileHome = lazy(() => import("../pages/MobileHome/MobileHome.jsx"));
  const MobileCurrency = lazy(() =>
    import("../pages/MobileCurrency/MobileCurrency.jsx")
  );

  return (
    <>
      <p>{!data ? 'Loading...' : data}</p>
    </>
  );
};
