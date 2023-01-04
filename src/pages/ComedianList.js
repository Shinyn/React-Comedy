import styles from "../ComedianList.module.scss";

const ComediansList = ({ json, handleDelete }) => {
  return (
    <div className="comedians-list">
      {json?.map((comedian) => {
        return (
          // Här är stylingen!-----------------------------------!!!!
          <div className={styles.card} key={comedian.id}>
            <h2 className={styles.myh2}>{comedian.name}</h2>
            <div className={styles.wrapper}>
              <img src={comedian.image} alt="" className={styles.image} />
            </div>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(comedian.id)}
            >
              Remove Comedian
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ComediansList;
