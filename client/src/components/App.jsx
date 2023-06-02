import React, { Suspense, lazy, useEffect } from "react";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./AuthRoutes/PrivateRoute";
import { RestrictedRoute } from "./AuthRoutes/RestrictedRoute";
import { Navigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { fetchTransactions } from "../redux/wallet/wallet.thunk";

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
  const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={
        <div className={css.loaderBox}>
          <RotatingLines
            strokeColor="grey"
          />
        </div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/home" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/login"
              />
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute component={<HomePage />} redirectTo="/login" />
            }
          />
          <Route
            path="/statistic"
            element={
              <PrivateRoute
                component={<StatisticsPage />}
                redirectTo="/login"
              />
            }
          />
          <Route
            path="/exchange"
            element={
              <PrivateRoute component={<ExchangePage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};
