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
  const RegistrationPage = lazy(() =>
    import("../pages/RegistrationPage/RegistrationPage.jsx")
  );
  const LoginPage = lazy(() =>
    import("../pages/LoginPage/LoginPage.jsx")
  );

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/statistic" element={<StatisticsPage />}></Route>
          <Route path="/exchange" element={<ExchangePage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
