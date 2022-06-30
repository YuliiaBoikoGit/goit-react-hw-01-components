import PropTypes from "prop-types";
import styles from './index.module.css';
import { FriendItem } from "./friendItem";


export const FriendList = ({ friends }) => {
    return <ul className={styles.friendList}>
        {friends.map(friend => (
            <FriendItem key={friend.id} friend={friend} />
        ))}
  </ul>
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
    ),
}