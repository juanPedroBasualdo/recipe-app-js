import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Search recipeData={recipeData} setData={setRecipeData} />
      <h1>{recipeData.map((recipe) => recipe.title)}</h1>
    </div>
  );
}

export default App;
