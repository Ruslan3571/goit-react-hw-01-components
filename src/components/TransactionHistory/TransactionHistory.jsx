import PropTypes from 'prop-types';
import s from '../TransactionHistory/TransactionHistory.module.css';

export function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.transactionHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
