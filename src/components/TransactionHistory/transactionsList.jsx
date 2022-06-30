import PropTypes from "prop-types";
import styles from './index.module.css';
import { TransactionItem } from './transactionItem';

export const TransactionHistory = ({ items }) => {
    return <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.header}>Type</th>
      <th className={styles.header}>Amount</th>
      <th className={styles.header}>Currency</th>
    </tr>
  </thead>

    <tbody>
        {items.map(item => (
           <TransactionItem key={item.id} item={item} />
       ))}        
  </tbody>
</table>
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};