import PropTypes from "prop-types";
import styles from './index.module.css';

export const TransactionItem = ({ item }) => {
    return <tr className={styles.transaction}>
               <td>{item.type}</td>
               <td>{item.amount}</td>
               <td>{item.currency}</td>
           </tr>
};

TransactionItem.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),
};