import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditIngredients from "../Components/UI/EditIngredients";
import { useParams } from "react-router-dom";

import axios from "axios";

function EditRecipePage() {
  const recipe = useLocation().state?.recipe;

  const [recipeName, setRecipeName] = useState(recipe?.recipeName || "");
  const [recipeImgLink, setImgLink] = useState(recipe?.imgLink || "");
  const [description, setDescription] = useState(recipe?.description || "");
  const [editIngredients, setEditIngredients] = useState(
    recipe?.ingredients || []
  );
  const { recipeId } = useParams();
  const formData = {
    recipeName: recipeName,
    imgLink: recipeImgLink,
    description: description,
    ingredients: editIngredients,
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.put(
        `http://localhost:5001/api/recipes/${recipeId}`,
        formData
      );
      console.log("Put request successful:", response.data);
    } catch (error) {
      console.error("Error making put request:", error);
    }

    navigate("/");
  };

  return (
    <div>
      {recipe && (
        <form className="max-w-xl mx-auto mt-5 p-6 relative bg-white-color rounded shadow-sm">
          <h1 className="text-base font-merriweather text-red-color font-bold ">
            Edit the Recipe
          </h1>

          <div className="my-5">
            <label
              htmlFor="recipe-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recipe name
            </label>
            <input
              type="text"
              id="recipe-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-color focus:border-red-color block w-full p-2.5"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              required
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="imgLink"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Meal Image Link
            </label>
            <input
              type="text"
              id="imgLink"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-color focus:border-red-color block w-full p-2.5"
              placeholder="Enter meal image link from internet"
              value={recipeImgLink}
              onChange={(e) => setImgLink(e.target.value)}
              required
            />
          </div>

          <EditIngredients
            editIngredients={editIngredients}
            setEditIngredients={setEditIngredients}
          />

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="py-2 px-4 my-6 rounded bg-red-color text-white-color font-bold text-md mx-auto font-openSans"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
}

export default EditRecipePage;
