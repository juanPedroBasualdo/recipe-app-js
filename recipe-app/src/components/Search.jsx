import { useEffect, useRef, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e7887d6f4f974b64a9dde6370c224e58";

export default function Search({ recipeData, setData }) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
      const data = response.json();
      console.log(data.results);
      setData(data.results);
    }
    if (!isFirstRender.current) {
      fetchRecipe();
    }
    isFirstRender = false;
  }, [search]);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(query);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar una receta..."
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
