import { useEffect, useState } from "react";
import styles from "./recipedetails.module.css";

export default function RecipeDetails({ detailsId }) {
  const URL = `https://api.spoonacular.com/recipes/${detailsId}/information`;
  const API_KEY = "e7887d6f4f974b64a9dde6370c224e58";

  const [isLoading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchRecipeInfo() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setDetails(data);
      setLoading(false);
    }

    if (detailsId !== "") {
      fetchRecipeInfo();
    }
  }, [detailsId]);

  if (detailsId !== "") {
    return (
      <div className={styles.recipecard}>
        <div>
          <h1 className={styles.recipename}>{details.title}</h1>
          <img
            className={styles.recipeimg}
            src={details.image}
            alt="Recipe Image"
          />
        </div>

        <div className={styles.recipedetails}>
          <span>
            <strong>⏲️ {details.readyInMinutes} minutes </strong>
          </span>
          <span>
            {details.vegetarian ? "🥬 Vegetarian" : "🥩 Non-Vegetarian"}
          </span>
          <span>{details.vegan ? "🍄‍🟫 Vegan" : "🥚 Non-Vegan"}</span>
          <span>
            <strong>🍴 Servings: {details.servings} people</strong>
          </span>
        </div>

        <h2>Instructions</h2>
        <div className={styles.recipeinstructions}>
          <ol>
            {isLoading ? (
              <p> Loading.. </p>
            ) : (
              details.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    );
  }

  return <div></div>;
}
