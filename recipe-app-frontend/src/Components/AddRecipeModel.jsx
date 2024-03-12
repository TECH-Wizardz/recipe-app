import { useState } from "react";
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import AddIngredients from "./UI/AddIngredients";
import axios from "axios";
function AddRecipeModel({ setAddRecipeModelOpen }) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeImgLink, setImgLink] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setAddRecipeModelOpen(false);
  };

  const formData = {
    recipeName: recipeName,
    imgLink: recipeImgLink,
    description: description,
    ingredients: ingredients,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5001/api/recipes/",
        formData
      );
      console.log("Post request successful:", response.data);
    } catch (error) {
      console.error("Error making post request:", error);
    }
    setAddRecipeModelOpen(false);
  };
  return (
    <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed bg-overlay-color">
      <form className="max-w-lg mx-auto mt-5 p-6 relative bg-white-color rounded max-h-[40rem] overflow-y-auto">
        <h1 className="text-base font-merriweather text-red-color font-bold ">
          Add a Recipe
        </h1>

        <div className="my-5">
          <label
            htmlFor="recipe-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Recipe name
          </label>
          <input
            type="recipe-name"
            id="recipe-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-color focus:border-red-color block w-full p-2.5  "
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
            type="imgLink"
            id="imgLink"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-color focus:border-red-color block w-full p-2.5  "
            placeholder="enter meal image link from internet "
            value={recipeImgLink}
            onChange={(e) => setImgLink(e.target.value)}
            required
          />
        </div>

        <AddIngredients
          ingredients={ingredients}
          setIngredients={setIngredients}
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
          className="bg-white-color p-2 rounded absolute top-1 right-1"
          onClick={handleClick}
        >
          <XMarkIcon className="w-[24px]" />
        </button>

        <button
          onClick={handleSubmit}
          className="py-2 px-4 my-6 rounded bg-red-color text-white-color font-bold text-md mx-auto font-openSans"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

AddRecipeModel.propTypes = {
  setAddRecipeModelOpen: PropTypes.func.isRequired,
};
export default AddRecipeModel;
