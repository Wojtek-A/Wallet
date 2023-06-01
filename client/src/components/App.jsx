import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./AuthRoutes/PrivateRoute";
import { RestrictedRoute } from "./AuthRoutes/RestrictedRoute";

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
          <Route
            index
            path="/login"
            element={<RestrictedRoute component={<LoginPage />}
              redirectTo='/home' />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />}
              redirectTo='/login' />} />
          <Route
            path="/home"
            element={<PrivateRoute component={<HomePage />}
              redirectTo='/login' />} />
          <Route
            path="/statistic"
            element={<PrivateRoute component={<StatisticsPage />}
              redirectTo='/login' />} />
          <Route
            path="/exchange"
            element={<PrivateRoute component={<ExchangePage />}
              redirectTo='/login' />} />
        </Routes>
      </Suspense>
    </>
  );
};
