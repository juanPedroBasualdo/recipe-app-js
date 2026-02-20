import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Nav from "./components/Nav";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";
import ListContainer from "./components/ListContainer";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [detailsId, setDetailsId] = useState("");
  return (
    <div className="App">
      <div className="navBar">
        <Nav />
        <Search recipeData={recipeData} setData={setRecipeData} />
      </div>
      <ListContainer>
        <RecipeContainer>
          <RecipeList recipeData={recipeData} setDetailsId={setDetailsId} />
        </RecipeContainer>
        <RecipeContainer>
          <RecipeDetails detailsId={detailsId} />
        </RecipeContainer>
      </ListContainer>
    </div>
  );
}

export default App;
