import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./AuthRoutes/PrivateRoute";
import { RestrictedRoute } from "./AuthRoutes/RestrictedRoute";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { fetchTransactions } from "../redux/wallet/wallet.thunk";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import Loader from "./Loader/Loader";

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
  const login = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (login) {
      dispatch(fetchTransactions());
    }
  }, [login, dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "9999",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader variant={"wallet"} scale={0.5} />
          </div>
        }
      >
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
