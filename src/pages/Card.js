import styles from "../ComedianList.module.scss";
import { Link } from "react-router-dom";

const Card = ({ comedian, handleDelete }) => {
  return (
    <div className={styles.card} key={comedian.id}>
      <h2 className={styles.myh2}>{comedian.name}</h2>
      <div className={styles.wrapper}>
        <Link
          to={{
            pathname: `/solo/${comedian.id}`,
            state: { test: comedian.id },
          }}
        >
          <img src={comedian.image} alt="" className={styles.image} />
        </Link>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(comedian.id)}
      >
        Remove Comedian
      </button>
    </div>
  );
};

export default Card;
