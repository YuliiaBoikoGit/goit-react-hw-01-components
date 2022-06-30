import { createUseStyles } from 'react-jss';
import PropTypes from "prop-types";

const useStyles = createUseStyles({
    item: {
    display: "flex",
    position: "relative",
    padding: "5px 35px",
    border: "1px solid darkgray",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    },

    name: {
    fontWeight: "700",
    fontSize: "16px",
    marginLeft: "5px",
    },

    status({ friend }) {
        return {
            position: "absolute",
            top: "50%",
            left: "5%",
            display: "block",
            width: "10px",
            height: "10px",
            border: "1px solid darkgray",
            borderRadius: "50%",
            transform: "translateY(-50%)",
            backgroundColor: friend.isOnline ? 'green' : 'red',
        }
    },
});

export const FriendItem = ({ friend }) => {
    const styles = useStyles({ friend });

    return  <li className={styles.item} key={friend.id}>
                <span className={styles.status}>{friend.isOnline}</span>
                <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{friend.name}</p>
            </li>
};

FriendItem.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
};
