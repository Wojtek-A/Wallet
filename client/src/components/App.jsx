import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  const MobileHome = lazy(() => import("../pages/MobileHome/MobileHome.jsx"));
  const MobileCurrency = lazy(() =>
    import("../pages/MobileCurrency/MobileCurrency.jsx")
  );

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/home" element={<MobileHome />}></Route>
          <Route path="/dolar" element={<MobileCurrency />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
