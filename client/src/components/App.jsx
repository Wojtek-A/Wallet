import React from "react";
import { ButtonAddTransactions } from "./ButtonAddTransactions/ButtonAddTransactions";

export const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <p>{!data ? "Loading..." : data}</p>
      <ButtonAddTransactions />
    </>
  );
};
