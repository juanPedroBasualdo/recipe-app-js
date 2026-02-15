import { useEffect, useRef, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e7887d6f4f974b64a9dde6370c224e58";

export default function Search({ recipeData, setData }) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const isFirstRender = true;

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setData(data.results);
    }
    if (isFirstRender.current) {
      isFirstRender = false;
      return;
    }
    fetchRecipe();
  }, [search]);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(query);
  }

  return (
    <div className={styles.searchbox}>
      <form onSubmit={(e) => handleSearch(e)}>
        <button className={styles.searchbutton} type="submit">
          Buscar
        </button>
        <input
          className={styles.searchinput}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar una receta..."
        />
      </form>
    </div>
  );
}
