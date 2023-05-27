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


  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
<<<<<<< HEAD
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/statistic" element={<StatisticsPage />}></Route>
          <Route path="/exchange" element={<ExchangePage />}></Route>
          <Route path="/register" element={<MobileRegistrationForm />}></Route>
=======
          <Route path="/home" element={<MobileHomePage />}></Route>
          <Route path="/statistic" element={<MobileExchangePage />}></Route>
          <Route path="/exchange" element={<MobileExchangePage />}></Route>
          <Route path="/register" element={<MobileRegistrationPage />}></Route>
>>>>>>> ae25e31 (add basic styles)
        </Routes>
      </Suspense>
    </>
  );
};
