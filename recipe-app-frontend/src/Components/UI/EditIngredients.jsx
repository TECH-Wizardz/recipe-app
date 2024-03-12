import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
function EditIngredients({ editIngredients, setEditIngredients }) {
  const [ingredient, setIngredient] = useState("");
  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const trimmedIngredient = ingredient.trim();
    if (!trimmedIngredient) return;

    const newIngredients = editIngredients
      ? `${editIngredients},${trimmedIngredient}`
      : trimmedIngredient;
    setEditIngredients(newIngredients);
    setIngredient("");
  };

  const handleIngredientEdit = (e) => {
    setEditIngredients(e.target.value);
  };

  const handleRemoveIngredient = (index) => {
    const ingredientsArray = editIngredients.split(",");
    ingredientsArray.splice(index, 1);
    const newIngredients = ingredientsArray.join(",");
    setEditIngredients(newIngredients);
  };

  const ingredientList = editIngredients
    .split(",")
    .filter((item) => item.trim());

  return (
    <div className="my-5">
      <label
        htmlFor="ingredient"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Ingredient
      </label>
      <input
        type="text"
        id="ingredient"
        value={ingredient}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-color focus:border-red-color block w-full p-2.5"
      />

      <button
        onClick={handleAddIngredient}
        className="  text-red-color  text-sm  font-semibold"
      >
        Add Ingredient
      </button>

      <div className="mt-5">
        <h2 className="text-sm font-medium leading-6 text-gray-900 ">
          Added Ingredients:
        </h2>
        <ul className="list-disc pl-5">
          {ingredientList.map((ingredient, index) => (
            <li key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={handleIngredientEdit}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-color focus:border-red-color p-2.5"
              />
              <button
                onClick={() => handleRemoveIngredient(index)}
                className="ml-2 text-red-color"
              >
                <XMarkIcon className="w-[20px]" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
EditIngredients.propTypes = {
  editIngredients: PropTypes.string.isRequired,
  setEditIngredients: PropTypes.func.isRequired,
};
export default EditIngredients;
