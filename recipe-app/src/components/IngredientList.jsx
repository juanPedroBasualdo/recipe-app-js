import IngredientItem from "./IngredientItem";

export default function IngredientList({ loadState, details }) {
  return (
    <div>
      <ul>
        {loadState ? (
          <p> Loading... </p>
        ) : (
          details.extendedIngredients.map((item) => (
            <IngredientItem item={item} />
          ))
        )}
      </ul>
    </div>
  );
}
