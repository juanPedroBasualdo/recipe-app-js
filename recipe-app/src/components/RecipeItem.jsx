import styles from "./recipeitem.module.css";

export default function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipebox}>
      <img
        className={styles.recipeimage}
        src={recipe.image}
        alt={recipe.title}
      />
      <div className={styles.recipetitle}>
        <h2>{recipe.title}</h2>
      </div>
      <div className={styles.buttoncontainer}>
        <button className={styles.recipebutton}>View Recipe</button>
      </div>
    </div>
  );
}
