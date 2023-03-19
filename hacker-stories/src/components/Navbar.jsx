import styles from "./Navbar.module.css";
function Navbar({
  navOneLink,
  navTwoLink,
  navTreLink,
  navFourLink,
  navFiveLink,
  header,
  navOne,
  navTwo,
  navTre,
  navFour,
  navFive,
}) {
  return (
    <div className={styles.navbar}>
      <div className={styles.infoContainer}>
        <ul>
          <li>
            <h2>{header}</h2>
          </li>
          <li className={styles.hovers}>
            <a href={navOneLink}>{navOne}</a>
          </li>
          <li className={styles.hovers}>
            <a href={navTwoLink}>{navTwo}</a>
          </li>
          <li className={styles.hovers}>
            <a href={navTreLink}>{navTre}</a>
          </li>
          <li className={styles.hovers}>
            <a href={navFourLink}>{navFour}</a>
          </li>
          <li className={styles.hovers}>
            <a href={navFiveLink}>{navFive}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
