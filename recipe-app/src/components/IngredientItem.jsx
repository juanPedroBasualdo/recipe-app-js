import styles from "./ingredientitem.module.css";

export default function IngredientItem({ item }) {
  return (
    <div className={styles.ingredientBox}>
      <li key={item.id}>
        <span className={styles.ingredientText}>
          {item.name}: {item.amount} {item.unit}
        </span>
      </li>
    </div>
  );
}
