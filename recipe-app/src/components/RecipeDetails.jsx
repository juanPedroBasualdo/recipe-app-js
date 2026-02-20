import { useEffect, useState } from "react";

export default function RecipeDetails({ detailsId }) {
  const URL = `https://api.spoonacular.com/recipes/${detailsId}/information`;
  const API_KEY = "e7887d6f4f974b64a9dde6370c224e58";

  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchRecipeInfo() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setDetails(data);
    }

    if (detailsId !== "") {
      fetchRecipeInfo();
    }
  }, [detailsId]);

  return (
    <div>
      <h1>{details.title}</h1>
      <img src={details.image} alt="Recipe Image" />
      {details.instructions}
    </div>
  );
}
