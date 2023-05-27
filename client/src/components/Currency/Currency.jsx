import { useEffect } from "react";
import css from "./Currency.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyThunk } from "../../redux/wallet/wallet.thunk";
import { selectCurrency, selectIsLoading } from "../../redux/selector";
import e from "../../assets/image/mountains.png";

const Currency = () => {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCurrencyThunk());
  }, []);

  console.log(isLoading);
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            currency.map((element) => (
              <tr>
                <td>{element.code}</td>
                <td>{element.bid}</td>
                <td>{element.ask}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
