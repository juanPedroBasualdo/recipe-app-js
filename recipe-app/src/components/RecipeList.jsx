import RecipeItem from "./RecipeItem";
import styles from "./recipelist.module.css";

export default function RecipeList({ recipeData, setDetailsId }) {
  return (
    <div className={styles.recipelist}>
      {recipeData.map((recipe) => (
        <RecipeItem
          recipe={recipe}
          setDetailsId={setDetailsId}
          key={recipe.id}
        />
      ))}
    </div>
  );
}
