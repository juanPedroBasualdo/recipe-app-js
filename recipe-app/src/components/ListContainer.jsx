import styles from "./listcontainer.module.css";

export default function ListContainer({ children }) {
  return <div className={styles.listbox}>{children}</div>;
}
