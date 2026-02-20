import styles from "./recipecontainer.module.css";

export default function RecipeContainer({ children }) {
  return <div className={styles.parentbox}>{children}</div>;
}
