import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
  const ExchangePage = lazy(() =>
    import("../pages/ExchangePage/ExchangePage.jsx")
  );
  const StatisticsPage = lazy(() =>
    import("../pages/StatisticsPage/StatisticsPage.jsx")
  );
  const MobileRegistrationPage = lazy(() =>
    import("../pages/MobileRegistrationPage/MobileRegistrationPage.jsx")
  );
  const MobileLoginPage = lazy(() =>
    import("../pages/MobileLoginPage/MobileLoginPage.jsx")
  );

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/statistic" element={<StatisticsPage />}></Route>
          <Route path="/exchange" element={<ExchangePage />}></Route>
          <Route path="/register" element={<MobileRegistrationPage />}></Route>
          <Route path="/login" element={<MobileLoginPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
