import RecipeItem from "./RecipeItem";
import styles from "./recipelist.module.css";

export default function RecipeList({ recipeData }) {
  return (
    <div className={styles.recipelist}>
      {recipeData.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
