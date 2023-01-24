import css from '../TransactionHistory/TransactionHistory-style.css';

export function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <thead className="transaction-head">
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
              <td className="transaction-first__string">{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
