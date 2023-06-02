import { useMemo } from 'react';
import { selectTransactions } from '../../redux/selector';
import css from './Balance.module.css';
import { useSelector } from 'react-redux';

const Balance = () => {
  const transactions = useSelector(selectTransactions);

  const transactionSum = useMemo(() => {
    if (transactions.length === 0) return 0;

    return transactions.reduce((acc, transaction) => {
      if (transaction.Type === '+') return acc + transaction.Sum;

      return acc - transaction.Sum;
    }, 0);
  }, [transactions]);
  return (
    <div className={css.container}>
      <div className={css.balanceWrapper}>
        <p className={css.title}>YOUR BALANCE</p>
        <p className={css.text}> $ {transactionSum}</p>
      </div>
    </div>
  );
};

export default Balance;
