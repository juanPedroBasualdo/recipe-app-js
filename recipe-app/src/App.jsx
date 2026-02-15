import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Search recipeData={recipeData} setData={setRecipeData} />
      <RecipeList recipeData={recipeData} />
    </div>
  );
}

export default App;
