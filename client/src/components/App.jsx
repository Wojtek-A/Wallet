import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  const MobileHomePage = lazy(() =>
    import("../pages/MobileHomePage/MobileHomePage.jsx")
  );
  const MobileExchangePage = lazy(() =>
    import("../pages/MobileExchangePage/MobileExchangePage.jsx")
  );

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/home" element={<MobileHomePage />}></Route>
          <Route path="/statistic" element={<MobileExchangePage />}></Route>
          <Route path="/exchange" element={<MobileExchangePage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
