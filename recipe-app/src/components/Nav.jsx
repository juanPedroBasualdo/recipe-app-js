import styles from "./nav.module.css";
import Search from "./Search";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <a
        href="https://github.com/juanPedroBasualdo/recipe-app-js"
        className={styles.navtext}
      >
        🥧 Recipe-App
      </a>
    </div>
  );
}
