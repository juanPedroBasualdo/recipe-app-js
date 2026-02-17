import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <div className="navBar">
        <Nav />
        <Search recipeData={recipeData} setData={setRecipeData} />
      </div>
      <RecipeList recipeData={recipeData} />
    </div>
  );
}

export default App;
