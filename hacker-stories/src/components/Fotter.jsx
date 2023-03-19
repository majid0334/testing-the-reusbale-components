import styles from "./Fotter.module.css";
function Fotter({ about, number, gmail }) {
  return (
    <div className={styles.con}>
      <h2>{about}</h2>
      <div className={styles.bla}>
      <p>{number}</p>
      <p>{gmail}</p>
      </div>
    </div>
  );
}

export default Fotter;
