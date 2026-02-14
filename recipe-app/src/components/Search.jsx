import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    function demo() {
      console.log("Demo");
    }
    demo();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar una receta..."
      />
    </div>
  );
}
